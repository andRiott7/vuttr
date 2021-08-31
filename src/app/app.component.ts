import { Component, OnInit } from '@angular/core';
import { ToolService } from './services/tool.service';
import { ToolItem } from './models/tools';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLE } from 'src/globals';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
    tools!: ToolItem[];
    //fmGroup: FormGroup;
    // title: FormControl = new FormControl("", [Validators.required]);
    // link: FormControl = new FormControl("", []);
    // description: FormControl = new FormControl("", []);
    // tags: FormControl = new FormControl("", []);

    constructor(
        private titleService: Title,
        private toolService: ToolService,
        private formBuilder: FormBuilder
    ) {

    }

    ngOnInit() {
        this.titleService.setTitle(`${PAGE_TITLE}`);
        this.loadTools();
    }

    removeTool(id: any) {
        this.toolService.deleteTools(this)
            .subscribe(response => {
               console.log(response);
               this.loadTools();
            });
        // this.toolService.deleteTools(id)
        // .subscribe(res => this.tools['id'] = res)
        // this.loadTools();
    }

    loadTools() {
        this.toolService.getTools()
            .subscribe(result => this.tools = result)

    }

}
