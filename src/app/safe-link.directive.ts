import { Directive, ElementRef, inject, input } from "@angular/core";
import { LogDirective } from "./log.directive";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    },
    hostDirectives: [LogDirective]
})
export class SafeLinkDirective {
    public queryParam = input<string>('myapp', {alias: 'appSafeLink'});
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
    constructor() {
        console.log('SafeLinkDirective created');
    }

    public onConfirmLeavePage(event: MouseEvent): void {
        const wantsToLeave = window.confirm('Are you sure you want to leave this page?');
        if (!wantsToLeave) {
            event.preventDefault();
        } else {
            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam();
            return;
        }
    }
}