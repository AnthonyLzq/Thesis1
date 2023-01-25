const fetchData = async () => {
  const [matchPhoto, receivePhoto, takePhoto] = await Promise.all([
    fetch(
      'https://raw.githubusercontent.com/AnthonyLzq/DoorCloud-backend/master/metrics/matchPhoto.csv'
    ),
    fetch(
      'https://raw.githubusercontent.com/AnthonyLzq/DoorCloud-backend/master/metrics/receivePhoto.csv'
    ),
    fetch(
      'https://raw.githubusercontent.com/AnthonyLzq/DoorCloud-IoTClient/master/demo/metrics/takingPhoto.csv'
    )
  ])
  const [matchPhotoText, receivePhotoText, takePhotoText] = (
    await Promise.all([
      matchPhoto.text(),
      receivePhoto.text(),
      takePhoto.text()
    ])
  ).map((text, index) => text.split('\n').slice(1))
  const matchData = matchPhotoText.map(line => {
    const [match, time] = line.split(',')

    return {
      match: Boolean(parseInt(match)),
      time: parseFloat(time)
    }
  })
  const receivePhotoData = receivePhotoText.map(line =>
    parseFloat(line.split(',')[2])
  )
  const takePhotoData = takePhotoText.map(line =>
    parseFloat(line.split(',')[1])
  )

  return {
    matchData,
    receivePhotoData,
    takePhotoData
  }
}

export type Data = Awaited<ReturnType<typeof fetchData>>

export { fetchData }
