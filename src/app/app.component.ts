import { Component, OnInit } from '@angular/core';
import { ToolService } from './services/tool.service';
import { ToolItem } from './models/tools';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLE } from 'src/globals';

declare let $: any;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
    tools!: ToolItem[];

    modalOpened: Boolean = false

    isLoading: boolean = false;
    term: string = '';
    items: ToolItem[] = [];
    currentTool: any = {
        // id: '',
        title: '',
        link: '',
        description: '',
        tags: ''

    };
    constructor(
        private titleService: Title,
        private toolService: ToolService,
    ) { }

    ngOnInit() {
        this.titleService.setTitle(`${PAGE_TITLE}`);
        this.loadTools();
        this.loadItems();
    }

    // CRUD methods
    removeTool() {
        this.toolService.deleteTools(this.currentTool.id)
            .subscribe(response => {
               console.log(response);
               error => { console.log(error)}
            });
        // this.toolService.deleteTools(id)
        // .subscribe(res => this.tools['id'] = res)
        this.loadTools();
    }
    decline() {
        // this.modalOpened = !this.modalOpened;
        if (this.modalOpened) {
            setTimeout(() => {
                $(".btn").removeClass('show');
            }, 400);
        }

    }
    toggleModal() {

    }

    loadTools() {
        this.toolService.getTools()
            .subscribe(result => this.tools = result)
    }
    // Search Filter
    loadItems() {
        this.isLoading = true;
        this.toolService.getSearch(this.term)
          .subscribe((data: any) => {
            this.items = data.rows;
            this.isLoading = false;
          });
      }

}
