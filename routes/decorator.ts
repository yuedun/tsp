class Route {
    greeting: string;
    constructor(greet: string){
        this.greeting = greet;
    }

    @route("hello")
    default(): any {
        console.log(this.greeting);
    }
}

function route(name: string) {
    return function (target: Object, value: string, desc: PropertyDescriptor) {
        console.log('>>>>', name);
    }
} 