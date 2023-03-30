import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { GiftApi } from "./AxiosService.js"

class GiftsService {
  async getGifts() {
    const res = await GiftApi.get()
    // console.log(res.data, 'getting gifts');
    appState.gifts = res.data.map(g => new Gift(g))
    console.log(appState.gifts, 'getting gifts');
  }

  setActive(id) {
    let gift = appState.gifts.find(g => g.id == id)
    appState.activeGift = gift
    // console.log(appState.activeGift, 'activeGift');
  }
  async createGift(giftData) {
    const res = await GiftApi.post('', giftData)
    console.log('[POST Gift]', res.data);
    // NOTE we had to flip the ...appstate.gifts and the new Gift... because we want the new gift to go to top of page
    appState.gifts = [new Gift(res.data), ...appState.gifts]
  }

  async openGift(id) {
    let gift = appState.gifts.find(g => g.id == id)
    gift.opened = true
    console.log('this is a gift', gift);
    const res = await GiftApi.put(gift.id, gift)
    console.log(res.data, 'this is res');
    let index = appState.gifts.findIndex(g => g.id == id)
    appState.gifts.splice(index, 1, new Gift(res.data))
    appState.emit('gifts')
  }
}
export const giftsService = new GiftsService()