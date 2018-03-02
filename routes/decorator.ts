class Route {
    greeting: string;
    constructor(greet: string){        
        this.greeting = greet;
    }

    @route("hello")
    default(): any {
        console.log("default:",this.greeting);
    }
}

function route(name: string) {
    return function (target: Object, value: string, desc: PropertyDescriptor) {
        var method = desc.value;
        console.log('>>>>method:', method);
        desc.value = function(){
            console.log("这才是函数执行时输出", )
            method.apply(this)
        }
    }
} 

new Route("开始执行").default()