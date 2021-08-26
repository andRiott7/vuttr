import { Component, OnInit } from '@angular/core';
import { ToolService } from './services/tool.service';
import { ToolItem } from './models/tools';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
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
    name: FormControl = new FormControl("");
    link: FormControl = new FormControl("");
    description: FormControl = new FormControl("");
    tags: FormControl = new FormControl("");



    constructor(
        private titleService: Title,
        private toolService: ToolService,
        private formBuilder: FormBuilder
    ) {
        this.createForm;
    }

    createForm() {
        this.fmGroup = this.formBuilder.group({
            'name': [null],
            'link': [null],
            'description': [null],
            'tags': [null]
        });
    }

    ngOnInit() {
        this.titleService.setTitle(`${PAGE_TITLE}`);
        this.loadTools();
    }

    loadTools() {
        this.toolService.getTools()
            .subscribe(result => this.tools = result)
    }
    onSend() {
        if (this.fmGroup.invalid)
            return;
        const { name, link, description, tags } = this.fmGroup.value;
        this.toolService.send(name, link, description, tags)
            .subscribe(
                result => {
                    this.fmGroup.reset();
                },
            );
    }
}
