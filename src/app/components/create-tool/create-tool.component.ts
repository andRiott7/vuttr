import { Component, OnInit } from '@angular/core';
import { ToolService } from '../../services/tool.service';
// import { ToolItem } from '../../models/tools';
// import { FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-create-tool',
    templateUrl: './create-tool.component.html',
    styleUrls: ['./create-tool.component.scss']
})
export class CreateToolComponent implements OnInit {
    // fmGroup: FormGroup;

    request:any = {
        title: '',
        description: '',
        link: '',
        tags: ['']
    }
    response: any;

    constructor(
        private toolService: ToolService,
        // private formBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {
        // this.fmGroup = this.formBuilder.group({
        //     title: [''],
        //     description: [''],
        //     link: [''],
        //     tags: [''],
        //   })
          this.onSave();
    }
    onSave() {
        this.toolService.newTools(this.request)
            .subscribe(res => this.response = res)
            console.log('tool saved');
    }

}
