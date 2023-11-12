const { th } = require('date-fns/locale');
const { PuppeteerExtraPlugin } = require('puppeteer-extra-plugin');

class Plugin extends PuppeteerExtraPlugin {
  constructor (config = {}) {
    super(config);
  }

  get name () {
    return 'geolocation'
  }

  get defaults () {
    return {
      _placeholder: ''
    }
  }

  async onPageCreated (page) {
    if (typeof this.opts.latitude !== 'number' || typeof this.opts.longitude !== 'number') {
      throw new Error('Puppeteer Plugin Geolocation Coordinates are missing or not numbers');
    }    
    await page.setGeolocation({
      latitude: this.opts.latitude,
      longitude: this.opts.longitude
    })
  }

}

module.exports = pluginConfig => new Plugin(pluginConfig);