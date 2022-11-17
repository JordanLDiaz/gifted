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

}