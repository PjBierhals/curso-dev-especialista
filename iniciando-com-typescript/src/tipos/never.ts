function falhar (msg:string):never{
    throw new Error(msg);
}

falhar ('Description')