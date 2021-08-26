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

    fmGroup: FormGroup;

    title: FormControl = new FormControl("", [Validators.required]);
    link: FormControl = new FormControl("", []);
    description: FormControl = new FormControl("", []);
    tags: FormControl = new FormControl("", []);



    constructor(
        private titleService: Title,
        private toolService: ToolService,
        private formBuilder: FormBuilder
    ) {
            this.fmGroup = this.formBuilder.group({
            title: this.title,
            link: this.link,
            description: this.description,
            tags: this.tags,
        });
    }

    ngOnInit() {
        this.titleService.setTitle(`${PAGE_TITLE}`);
        this.loadTools();
        this.onSend();
    }

    loadTools() {
        this.toolService.getTools()
            .subscribe(result => this.tools = result)
    }
    onSend() {
        if (this.fmGroup.invalid) {
            // this.fmGroup.disable();
            var formData: any = new FormData();
            formData.append("title", this.fmGroup.get('title').value);
            formData.append("link", this.fmGroup.get('link').value);
            formData.append("description", this.fmGroup.get('description').value);
            formData.append("tags", this.fmGroup.get('tags').value);

        }

    }
}
