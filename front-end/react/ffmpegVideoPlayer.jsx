import React from 'react'
import flvJs from 'flv.js'

export default class extends React.Component {
	constructor(props){
		super(props)
	}

	componentDidMount () {
		const { videoSrc } = this.props
        const videoBox = document.getElementById(`video`)
        const player = (()=>{
            if(!videoSrc) return
            return flvJs.createPlayer({
                type: "flv",
                isLive: true,
                url: `ws://localhost:3000/video?src=${encodeURIComponent(videoSrc)}`
            })
        })()
        player.attachMediaElement(videoBox)
        player.load()
        player.play()
	}
	render () {	
		return (
			<div className='video_rtsp'>
				<video width="400" height="300" muted autoPlay id="video"></video>
			</div>
		)
	}
}