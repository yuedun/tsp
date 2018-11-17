import "reflect-metadata";

@controller("")
class Route {
    greeting: string;
    constructor(greet: string) {
        this.greeting = greet;
    }

    @route("hello")
    default(): any {
        console.log("default:", this.greeting);
    }
}

function route(name: string) {
    return function (target: Object, key: string, desc: PropertyDescriptor) {
        var method = desc.value;
        // console.log('>>>>method:', method);
        var t = Reflect.getMetadata("design:type", target, key);
        var a = Reflect.getMetadata("name", new Route("fdhh"));
        console.log(`${key}-type: ${t.name}, ${a}`);
        desc.value = function () {
            console.log("这才是函数执行时输出")
            method.apply(this)
        }
    }
}
function controller(name:string){
    return (target)=>{
        Reflect.defineMetadata("name", "myctrl", target);
    }
}

new Route("开始执行").default()