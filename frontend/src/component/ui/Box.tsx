interface BoxProps{
    width: string;
    height: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    [key: string]: any;
  }
  
const box = {
    backgroundColor: 'white',
    borderRadius: '8px'
}

function Box({ width, height, children, style, ...rest }: BoxProps){
    return (
        <div
        style= {{...box, width, height, ...style}}
        {...rest}
        >
            {children}
        </div>
    );
}
export default Box;