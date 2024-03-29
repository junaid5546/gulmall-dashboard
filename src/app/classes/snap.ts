import { Color } from "api-package";

export class Snap  {
    public name:string;
    public file:Blob;
    public url:string;
    public path:string;
    public webPath:string;
    public uploaded:boolean = false;
    public color:Color;
    constructor(name:string,file:Blob,url:string,path:string,webPath:string){
        this.name = name;
        this.file = file;
        this.url = url;
        this.path = path;
        this.webPath = webPath;
    }

    public makeImagePath=(country:string,userId:string,userName:string,userPhone:string,categoryName:string,subCategoryName:string,itemName:string,itemChildId:string,itemId:string)=>{
    let path = `${country}/posts/${userId}_${userName}_${userPhone}/${categoryName}/${subCategoryName}/${itemName}/${itemChildId}/${itemId}/${this.name}`;
    this.path = path;
    console.log("Image path:", this)
    }

    public setColor=(color:Color)=>{
        this.color = color;
    }
}