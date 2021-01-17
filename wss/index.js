import Ws from 'ws'
import queryString from 'query-string'
import ffmpeg from './ffmpeg.js'


export default server => {
    const wss = new Ws.Server({
        server
    })
    
    wss.on('connection', (socket,request) => {
        const [ path, paramStr ] = request.url.split('?')
        const { src } = queryString.parse(paramStr)
        switch ( path ) {
            case '/rtsp':
                ffmpeg(socket, src)
                break;
        
            default:
                break;
        }
        socket.send(JSON.stringify('socket connection'))
    })
}
