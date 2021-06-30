#vertex
attribute vec2 coordinates;

void main(void) 
{
    gl_Position = vec4(coordinates,0.0, 1.0);    
}

#fragment
void main(void) 
{
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);   
}