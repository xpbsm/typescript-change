type X = Promise<string>
type Y = Promise<{ field: number }>

type Transform<A> = A extends Promise<infer T> ? T : never; 
type ResultX = Transform<X>; // ResultX type equals string
type ResultY = Transform<Y>; // ResultY type equals { field: number }
