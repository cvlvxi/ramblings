# Walk through example: Box2dExample

Entry point:

```

MAGNUM_APPLICATION_MAIN(Magnum::Examples::Box2DExample)
```

Class definition 

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

- Arguments processes argc and argv in the [Type]Application Magnum specific implementation e.g. Sdl2
- Callsite

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

- Camera Initialization

```c++
  /* Configure camera */
  _cameraObject = new Object2D{&_scene};
  _camera = new SceneGraph::Camera2D{*_cameraObject};
  _camera->setAspectRatioPolicy(SceneGraph::AspectRatioPolicy::Extend)
      .setProjectionMatrix(Matrix3::projection({20.0f, 20.0f}))
      .setViewport(GL::defaultFramebuffer.viewport().size());
```

- What's an Object2D?

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

- First call to createBody

```c++

b2Body *Box2DExample::createBody(Object2D &object, const Vector2 &halfSize,
                                 const b2BodyType type,
                                 const DualComplex &transformation,
                                 const Float density) {
```