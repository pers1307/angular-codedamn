# lesson 2
## install Angular 2

// install

npm install -g @angular/cli@latest

// ng version
ng -v

// create new project
ng new intro2angular

// up server
ng serve

# lesson 3
## architecture

# lesson 4
## decorators
Это по сути обертка над объектом, которая позволяет делать что либо, до выполнения функции или инициализации класса.

# lesson 5
## Lifecycle Hooks

[<img src="https://www.tutorialspoint.com/angular2/images/lifecycle.jpg">](https://www.tutorialspoint.com/angular2/angular2_lifecycle_hooks.htm)

* Following is a description of each lifecycle hook.
* ngOnChanges − When the value of a data bound property changes, then this method is called.
* ngOnInit − This is called whenever the initialization of the directive/component after Angular first displays the data-bound properties happens.
* ngDoCheck − This is for the detection and to act on changes that Angular can't or won't detect on its own.
* ngAfterContentInit − This is called in response after Angular projects external content into the component's view.
* ngAfterContentChecked − This is called in response after Angular checks the content projected into the component.
* ngAfterViewInit − This is called in response after Angular initializes the component's views and child views.
* ngAfterViewChecked − This is called in response after Angular checks the component's views and child views.
* ngOnDestroy − This is the cleanup phase just before Angular destroys the directive/component.

# lesson 6
## Components

// generate component
ng generate component hello
