MOUNTING LIFECYCLE METHODS
What's a Lifecycle Method?
Lifecycle methods are methods that get called at certain moments in a component's life.

You can write a lifecycle method that gets called right before a component renders for the first time.

You can write a lifecycle method that gets called right after a component renders, every time except for the first time.

You can attach lifecycle methods to a lot of different moments in a component's life. This has powerful implications!

In this unit, we will walk through each lifecycle method. Click Next to begin!

---
MOUNTING LIFECYCLE METHODS
Mounting Lifecycle Methods
There are three categories of lifecycle methods: mounting, updating, and unmounting. This lesson is about the first category: mounting lifecycle methods.

A component "mounts" when it renders for the first time. This is when mounting lifecycle methods get called.

There are three mounting lifecycle methods:

componentWillMount
render
componentDidMount
When a component mounts, it automatically calls these three methods, in order.