import Image from './src/main'

/* istanbul ignore next */
Image.install = function(app) {
  app.component(Image.name, Image)
}

export default Image
