import { appState } from "../AppState.js";
import { giftsService } from "../Services/GiftsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawGifts() {
  const gifts = appState.gifts
  let template = ''
  gifts.forEach(g => template += g.GiftsTemplate)
  setHTML('gifts-template', template)
}


export class GiftsController {
  constructor() {
    // console.log('hello from gift controller');
    appState.on('gifts', _drawGifts)
    this.getGifts()
  }

  async getGifts() {
    try {
      // console.log('getting gifts')
      await giftsService.getGifts()
    } catch (error) {
      Pop.error(error.message)
    }
  }

  setActive(id) {
    giftsService.setActive(id)
    // console.log(id);
  }

  async createGift() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let giftData = getFormData(form)
      Pop.toast('Created', 'success')
      form.reset()
      console.log(giftData);
      await giftsService.createGift(giftData)
    } catch (error) {
      Pop.error(error.message)
    }
  }

  async openGift(id) {
    try {
      // console.log('this is open', id)
      await giftsService.openGift(id)
    } catch (error) {
      Pop.error(error.message)
    }
  }
}