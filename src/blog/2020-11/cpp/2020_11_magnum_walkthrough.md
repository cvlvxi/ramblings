<!-- vscode-markdown-toc -->
* 1. [Link](#Link)
* 2. [Entry point](#Entrypoint)
* 3. [Class definition](#Classdefinition)
* 4. [Arguments](#Arguments)
* 5. [SDL & Gl Configuration](#SDLGlConfiguration)
* 6. [Camera Initialization](#CameraInitialization)
* 7. [What's an Object2D & Scene2D](#WhatsanObject2DScene2D)
* 8. [What's createBody?](#WhatscreateBody)
	* 8.1. [b2BodyType](#b2BodyType)
	* 8.2. [DualComplex?](#DualComplex)
	* 8.3. [Default value for density in createBody](#DefaultvaluefordensityincreateBody)
	* 8.4. [Create Body Definition](#CreateBodyDefinition)
		* 8.4.1. [b2BodyDef](#b2BodyDef)
		* 8.4.2. [CreateBody](#CreateBody)
* 9. [NoCreate](#NoCreate)
* 10. [Shaders](#Shaders)
	* 10.1. [Call site use](#Callsiteuse)
	* 10.2. [Flat2D?](#Flat2D)
* 11. [Meshes](#Meshes)
* 12. [BoxDrawable](#BoxDrawable)
	* 12.1. [Issue creating a BoxDrawable](#IssuecreatingaBoxDrawable)
* 13. [Entity Component system + Magnum](#EntityComponentsystemMagnum)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->


# Walk through example: Box2dExample

##  1. <a name='Link'></a>Link
- [Magnum Box2d Example](https://github.com/mosra/magnum-examples/tree/master/src/box2d)

##  2. <a name='Entrypoint'></a>Entry point

```c++
MAGNUM_APPLICATION_MAIN(Magnum::Examples::Box2DExample)
```

##  3. <a name='Classdefinition'></a>Class definition 

```c++
class Box2DExample : public Platform::Application {
public:
  explicit Box2DExample(const Arguments &arguments);

private:
  void drawEvent() override;
  void mousePressEvent(MouseEvent &event) override;

  b2Body *createBody(Object2D &object, const Vector2 &size, b2BodyType type,
                     const DualComplex &transformation, Float density = 1.0f);

  GL::Mesh _mesh{NoCreate};
  GL::Buffer _instanceBuffer{NoCreate};
  Shaders::Flat2D _shader{NoCreate};
  Containers::Array<InstanceData> _instanceData;

  Scene2D _scene;
  Object2D *_cameraObject;
  SceneGraph::Camera2D *_camera;
  SceneGraph::DrawableGroup2D _drawables;
  Containers::Optional<b2World> _world;
};
```

##  4. <a name='Arguments'></a>Arguments 

- Arguments processes argc and argv in the [Type]Application Magnum specific implementation e.g. Sdl2

```c++

Box2DExample::Box2DExample(const Arguments &arguments)
    : Platform::Application{arguments, NoCreate} {
  /* Make it possible for the user to have some fun */
  Utility::Arguments args;
  args.addOption("transformation", "1 0 0 0")
      .setHelp("transformation", "initial pyramid transformation")
      .addSkippedPrefix("magnum", "engine-specific options")
      .parse(arguments.argc, arguments.argv);

```

- Argument values are referenced like so

```c++
 args.value<DualComplex>("transformation").normalized();
```

##  5. <a name='SDLGlConfiguration'></a>SDL & Gl Configuration

- Platform Specific configuration (sdl2) and gl configuration

```c++
    const Vector2 dpiScaling = this->dpiScaling({});
    Configuration conf;
    conf.setTitle("Magnum Box2D Example").setSize(conf.size(), dpiScaling);
    GLConfiguration glConf;
    glConf.setSampleCount(dpiScaling.max() < 2.0f ? 8 : 2);
    if (!tryCreate(conf, glConf))
      create(conf, glConf.setSampleCount(0));
  }
```

##  6. <a name='CameraInitialization'></a>Camera Initialization

```c++
  /* Configure camera */
  _cameraObject = new Object2D{&_scene};
  _camera = new SceneGraph::Camera2D{*_cameraObject};
  _camera->setAspectRatioPolicy(SceneGraph::AspectRatioPolicy::Extend)
      .setProjectionMatrix(Matrix3::projection({20.0f, 20.0f}))
      .setViewport(GL::defaultFramebuffer.viewport().size());
```

##  7. <a name='WhatsanObject2DScene2D'></a>What's an Object2D & Scene2D

```c++
typedef SceneGraph::Object<
    SceneGraph::TranslationRotationScalingTransformation2D>
    Object2D;
```

- Scenegraph part of Magnum 
- class that has translation, rotation, transformation etc.. 
- In this case we can see it's set to a *_cameraObject


- What's a Scene2D?

```c++
typedef SceneGraph::Scene<
    SceneGraph::TranslationRotationScalingTransformation2D>
    Scene2D;
```

- Same as Object2D but for "Scene"

- More box2d stuff

```c++
  /* Create the ground */
  auto ground = new Object2D{&_scene}
  createBody(*ground, {11.0f, 0.5f}, b2_staticBody,
             DualComplex::translation(Vector2::yAxis(-8.0f)));
  new BoxDrawable{*ground, _instanceData, 0xa5c9ea_rgbf, _drawables};
```

##  8. <a name='WhatscreateBody'></a>What's createBody?

- First call to createBody

```c++

b2Body *Box2DExample::createBody(Object2D &object, const Vector2 &halfSize,
                                 const b2BodyType type,
                                 const DualComplex &transformation,
                                 const Float density) {
```

###  8.1. <a name='b2BodyType'></a>b2BodyType

```c++

/// The body type.
/// static: zero mass, zero velocity, may be manually moved
/// kinematic: zero mass, non-zero velocity set by user, moved by solver
/// dynamic: positive mass, non-zero velocity determined by forces, moved by solver
enum b2BodyType
{
	b2_staticBody = 0,
	b2_kinematicBody,
	b2_dynamicBody
};
```

###  8.2. <a name='DualComplex'></a>DualComplex?

```c++
/** @brief Float dual complex number */
typedef Math::DualComplex<Float> DualComplex;
```

###  8.3. <a name='DefaultvaluefordensityincreateBody'></a>Default value for density in createBody

```c++
  b2Body *createBody(Object2D &object, const Vector2 &size, b2BodyType type,
                     const DualComplex &transformation, Float density = 1.0f);
```

###  8.4. <a name='CreateBodyDefinition'></a>Create Body Definition

```c++
b2Body *Box2DExample::createBody(Object2D &object, const Vector2 &halfSize,
                                 const b2BodyType type,
                                 const DualComplex &transformation,
                                 const Float density) {
  b2BodyDef bodyDefinition;
  bodyDefinition.position.Set(transformation.translation().x(),
                              transformation.translation().y());
  bodyDefinition.angle = Float(transformation.rotation().angle());
  bodyDefinition.type = type;
  b2Body *body = _world->CreateBody(&bodyDefinition);

  b2PolygonShape shape;
  shape.SetAsBox(halfSize.x(), halfSize.y());

  b2FixtureDef fixture;
  fixture.friction = 0.8f;
  fixture.density = density;
  fixture.shape = &shape;
  body->CreateFixture(&fixture);

#ifndef IT_IS_THE_OLD_BOX2D
  /* Why keep things simple if there's an awful and backwards-incompatible
     way, eh? https://github.com/erincatto/box2d/pull/658 */
  body->GetUserData().pointer = reinterpret_cast<std::uintptr_t>(&object);
#else
  body->SetUserData(&object);
#endif
  object.setScaling(halfSize);

  return body;
}
```

See call site again

```c++
  createBody(*ground, {11.0f, 0.5f}, b2_staticBody,
             DualComplex::translation(Vector2::yAxis(-8.0f)));
```

Ok so it's setting gravity -8.0f 

####  8.4.1. <a name='b2BodyDef'></a>b2BodyDef

```c++
/// A body definition holds all the data needed to construct a rigid body.
/// You can safely re-use body definitions. Shapes are added to a body after construction.
struct B2_API b2BodyDef
{
	/// This constructor sets the body definition default values.
	b2BodyDef()
	{
		position.Set(0.0f, 0.0f);
		angle = 0.0f;
		linearVelocity.Set(0.0f, 0.0f);
		angularVelocity = 0.0f;
		linearDamping = 0.0f;
		angularDamping = 0.0f;
		allowSleep = true;
		awake = true;
		fixedRotation = false;
		bullet = false;
		type = b2_staticBody;
		enabled = true;
		gravityScale = 1.0f;
	}
}
```

####  8.4.2. <a name='CreateBody'></a>CreateBody

```c++
b2Body *body = _world->CreateBody(&bodyDefinition);
  b2PolygonShape shape;
  shape.SetAsBox(halfSize.x(), halfSize.y());

  b2FixtureDef fixture;
  fixture.friction = 0.8f;
  fixture.density = density;
  fixture.shape = &shape;
  body->CreateFixture(&fixture);

#ifndef IT_IS_THE_OLD_BOX2D
  /* Why keep things simple if there's an awful and backwards-incompatible
     way, eh? https://github.com/erincatto/box2d/pull/658 */
  body->GetUserData().pointer = reinterpret_cast<std::uintptr_t>(&object);
#else
  body->SetUserData(&object);
#endif
  object.setScaling(halfSize);
  return body;
```

##  9. <a name='NoCreate'></a>NoCreate

- This is a constexpr Tag defined in Tags.h

```c++

/**
@brief No creation tag

Use for construction with initialization, but keeping the instance empty
(usually equivalent to a moved-out state).
*/
constexpr NoCreateT NoCreate{NoCreateT::Init{}};

...
...
/* Explicit constructor to avoid ambiguous calls when using {} */
struct NoCreateT {
    #ifndef DOXYGEN_GENERATING_OUTPUT
    struct Init{};
    constexpr explicit NoCreateT(Init) {}
    #endif
};
```

When defined like such in the class constructor

```c++

HelloWorld::HelloWorld(const Arguments &arguments)
    : Platform::Application{arguments, NoCreate} {
```

It will not spawn an SDL2 window when created 


##  10. <a name='Shaders'></a>Shaders

Magnum Shaders definition

```c++

namespace Magnum { namespace Shaders {

namespace Implementation {
    enum class FlatFlag: UnsignedByte {
        Textured = 1 << 0,
        AlphaMask = 1 << 1,
        VertexColor = 1 << 2,
        TextureTransformation = 1 << 3,
        #ifndef MAGNUM_TARGET_GLES2
        ObjectId = 1 << 4,
        InstancedObjectId = (1 << 5)|ObjectId,
        #endif
        InstancedTransformation = 1 << 6,
        InstancedTextureOffset = (1 << 7)|TextureTransformation
    };
    typedef Containers::EnumSet<FlatFlag> FlatFlags;
}
```

###  10.1. <a name='Callsiteuse'></a>Call site use

```c++
   /* Create an instanced shader */
    _shader = Shaders::Flat2D{Shaders::Flat2D::Flag::VertexColor |
                              Shaders::Flat2D::Flag::InstancedTransformation};
  }
```

###  10.2. <a name='Flat2D'></a>Flat2D?

```c++
/** @brief 2D flat shader */
typedef Flat<2> Flat2D;

...

template<UnsignedInt dimensions> class MAGNUM_SHADERS_EXPORT Flat: public GL::AbstractShaderProgram {
    public:
        /**
         * @brief Vertex position
         *
         * @ref shaders-generic "Generic attribute",
         * @ref Magnum::Vector2 "Vector2" in 2D, @ref Magnum::Vector3 "Vector3"
         * in 3D.
         */

...


class MAGNUM_GL_EXPORT AbstractShaderProgram: public AbstractObject {
    #ifndef MAGNUM_TARGET_GLES2
    friend TransformFeedback;
    #endif
    friend Implementation::ShaderProgramState;

```

Reading the docstring above Flat we can see it says:

```
Draws the whole mesh with given color or texture. For a colored mesh you need
to provide the @ref Position attribute in your triangle mesh. By default, the
shader renders the mesh with a white color in an identity transformation.
Use @ref setTransformationProjectionMatrix(), @ref setColor() and others to
configure the shader.
```

So it will generate a shader for you... vertex + pixel? 

##  11. <a name='Meshes'></a>Meshes

Compile with MeshTools and supply a primitive like  `squareSolid()`

```c++
    /* Box mesh with an (initially empty) instance buffer */
    _mesh = MeshTools::compile(Primitives::squareSolid());
    _instanceBuffer = GL::Buffer{};
    _mesh.addVertexBufferInstanced(_instanceBuffer, 1, 0,
                                   Shaders::Flat2D::TransformationMatrix{},
                                   Shaders::Flat2D::Color3{});
```

So this creates a vertex buffer for you.. cool.. 

Look under magnum Primitives folder for all types of primitives including:

- Axis
- Capsule
- Circle
- Cone
- Gradiant
- Line
- Square
- UV Sphere.. etc

##  12. <a name='BoxDrawable'></a>BoxDrawable

```c++
class BoxDrawable : public SceneGraph::Drawable2D {
public:
  explicit BoxDrawable(Object2D &object,
                       Containers::Array<InstanceData> &instanceData,
                       const Color3 &color,
                       SceneGraph::DrawableGroup2D &drawables)
      : SceneGraph::Drawable2D{object, &drawables},
        _instanceData(instanceData), _color{color} {}

private:
  void draw(const Matrix3 &transformation, SceneGraph::Camera2D &) override {
    arrayAppend(_instanceData, Containers::InPlaceInit, transformation, _color);
  }

  Containers::Array<InstanceData> &_instanceData;
  Color3 _color;
};
```

arrayAppend depends on:

```c++
#include <Corrade/Containers/Array.h>
#include <Corrade/Containers/GrowableArray.h>
```

Where the array type is the `instanceData` -- see `Containers::Array<InstanceData>`

and InstanceData is simply

```c++
struct InstanceData {
  Matrix3 transformation;
  Color3 color;
};
```

Interestingly note that it's a AOS rather than SOA.. so this isn't entity component driven? 

###  12.1. <a name='IssuecreatingaBoxDrawable'></a>Issue creating a BoxDrawable
- This call

```c++
new BoxDrawable{*ground, _instanceData, 0xa5c9ea_rgbf, _drawables};
```

This hex value + _rgbf complains:

```bash
 error: no matching literal operator for call to 'operator""_rgbf' with
      argument of type 'unsigned long long' or 'const char *', and no matching literal operator template
  new BoxDrawable{*ground, _instanceData, 0xa5c9ea_rgbf, _drawables};
```

##  13. <a name='EntityComponentsystemMagnum'></a>Entity Component system + Magnum
- Here's an implementation of ENTT pong with magnum by skypjack the creator of entt
- [Entt + Magnum + Pong == ✅](https://gist.github.com/skypjack/598a4864a31ada6d3f18192a11de1923)
