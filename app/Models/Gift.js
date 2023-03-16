export class Gift {
  constructor(data) {
    this.id = data.id
    this.tag = data.tag
    this.imgUrl = data.url
    this.opened = data.opened
  }

  get GiftsTemplate() {
    return `
    <div class="col-12 col-md-4 p-4 selectable" onclick="app.giftsController.openGift('${this.id}')">
      <div class="card">
        <img src="${this.imgUrl}" class="card-img-top selectable" onclick="app.giftsController.setActive('${this.id}')" alt="">
        <h4>${this.tag}</h4>
      </div>
    </div>
    `
  }

  get WrappedGiftsTemplate() {
    return `
    <div class="col-12 col-md-4 p-4 selectable" onclick="app.giftsController.openGift('${this.id}')">
      <div class="card">
        <img src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" class="card-img-top selectable" onclick="app.giftsController.setActive('${this.id}')" alt="">
        <h4>${this.tag}</h4>
      </div>
    </div>
    `
  }

}