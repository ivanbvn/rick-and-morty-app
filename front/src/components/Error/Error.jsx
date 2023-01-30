import { Img404, ImgEmoji, ContainerImg404, ContainerImgEmoji, ContainerImages } from "./ErrorStyles"

const Error = () => {
  return (
    <ContainerImages>
      <ContainerImgEmoji>
        <ImgEmoji src="https://i.imgur.com/emjdLIQ.png"/>
      </ContainerImgEmoji>
      <ContainerImg404>
        <Img404 src="https://i.imgur.com/7Cp6ezU.png" alt="404" />
      </ContainerImg404>

    </ContainerImages>
  )
}

export default Error