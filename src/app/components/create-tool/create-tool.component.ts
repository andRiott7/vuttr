import { Component, OnInit } from '@angular/core';
import { ToolService } from '../../services/tool.service';
import { ToolItem } from '../../models/tools';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { map, switchMap, exhaustMap } from 'rxjs/operators';


@Component({
    selector: 'app-create-tool',
    templateUrl: './create-tool.component.html',
    styleUrls: ['./create-tool.component.scss']
})
export class CreateToolComponent implements OnInit {

    // form: FormGroup;
    // title: FormControl = new FormControl("", [Validators.required]);
    // link: FormControl = new FormControl("", [Validators.required]);
    // description: FormControl = new FormControl("");
    // tags: FormControl = new FormControl("");
    // submitted: boolean = false;

    request: any = {
        id: '',
        title: '',
        link: '',
        description: '',
        tags: ['']
    }
    response: any;
    tool: any;

    constructor(
        private toolService: ToolService,
        private fb: FormBuilder,
    ) { }

    ngOnInit(): void {

        // this.form = this.fb.group({
        //     // id: [this.tool.id],
        //     // title: [this.tool.title, [Validators.required, Validators.maxLength(32)]],
        //     // link: [this.tool.link, [Validators.required, Validators.maxLength(64)]],
        //     // description: [''],
        //     // tags: [''],
        //     title: this.title,
        //     link: this.link,
        //     description: this.description,
        //     tags: this.tags,
        // });
    }
    onSave() {
        this.toolService.newTools(this.request)
            .subscribe(res => this.request = res)
            console.log('tool saved');
    }

    // onSubmit() {
    //     this.submitted = true;
    //     if (this.form.valid) {
    //         console.log('submit');
    //         let msgSuccess = 'Tool added!';
    //         let msgError = 'An error occurred, try again';
    //         this.toolService.newTools(this.response)
    //         .subscribe(res => this.response = res)
    //         console.log('tool saved');
    //         // this.toolService.newTools()
    //         //     .subscribe(res => this = res)
    //         //     console.log('tool saved');

    //     }
    // }
}
