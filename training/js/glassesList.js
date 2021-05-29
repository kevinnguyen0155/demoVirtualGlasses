export class GlassesList {
  constructor() {
    this.glist = []
  }
  addGlasses(glasses) {
    this.glist.push(glasses)
  }
  renderGlasses() {
    return this.glist.reduce((totalContent, item, index) => {
      return (
        totalContent +
        `
            <div class="col-4">
                <img class="img-fluid" src=${item.src} data-id=${item.id} onclick="tryOnModel(event)" style="cursor : pointer;">
            </div>
        `
      )
    }, "")
  }
}
