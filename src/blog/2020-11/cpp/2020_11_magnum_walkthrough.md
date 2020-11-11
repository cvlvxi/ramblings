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

## NoCreate

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
