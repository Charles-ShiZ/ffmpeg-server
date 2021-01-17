const Event = require('bcore/event')
const $ = require('jquery')
const _ = require('lodash')
const flvJs = require('./flv.js')

module.exports = Event.extend( function Base(container, config) {
    this.container = $(container)
    this.config = {}
    this.data = {}
    this.init(config)
}, {
    init(config){
        this.config = config
    },
    render (data, config) {
        if(config) this.config = config
        if(data) this.data = data
        const { videoId, server, size } = this.config
        const videoSrc = (()=>{
            if(this.data.src) return this.data.src
            else return this.config.src
            
        })();
        console.log(this,videoSrc)
        this.container.html(
            `
                <div className='video_rtsp'>
                    <video width="${size.width}" height="${size.height}" muted autoPlay id="${videoId}"></video>
                </div>
            `
        )

        const videoBox = document.getElementById(`${videoId}`)
        const player = (()=>{
            if(!videoSrc) return
            return flvJs.createPlayer({
                type: "flv",
                isLive: true,
                url: `${server}?src=${encodeURIComponent(videoSrc)}`
                //url: 'ws://localhost:8888/rtsp'
            });
        })()
        player.attachMediaElement(videoBox);
        player.load()
        player.play()
    },
    resize (width, height) {
    },
    destroy () {
        console.log('请实现 destroy 方法')
    }
})

