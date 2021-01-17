import ffmpeg from 'fluent-ffmpeg'
import wsStream  from "websocket-stream/stream.js"

function myPreset(ffmpeg) {
    ffmpeg
      .format('flv')
      .flvmeta()
      .size('720x?')
      .videoBitrate('512k')
      .videoCodec('libx264')
      .fps(20)
      .noAudio()
      /*
      .audioBitrate('96k')
      .audioCodec('aac')
      .audioFrequency(22050)
      .audioChannels(2)
      */
}

export default (socket,src)=>{
    const stream = wsStream(socket, {
        binary: true,
    })
    let videoSrc = decodeURIComponent(src)
    try {
        ffmpeg(videoSrc)
            .on("start", function () {
                console.log("Stream started.")
            })
            .on("codecData", function () {
                //console.log(url, "Stream codecData.")
            })
            .on("error", function (err) {
                console.log("An error occured: ", err.message)
            })
            .on("end", function () {
                console.log("Stream end!")
            })
            .preset(myPreset)
            .pipe(stream, {end:true})
    } catch (error) {
        console.log(error)
    }
}