import { animate, state, style, transition, trigger } from "@angular/animations";

export const sidebarAnimation = trigger('openClose', [
    state('open', style({
      width: 'calc(35px + 16rem)',
    })),
    state('closed', style({
      width: 'calc(35px + 3rem)',
    })),
    transition('open <=> closed', [
      animate('3s ease-in-out')
    ]),
]);

export const menuIconAnimation = trigger('changeIcon', [
    state('cross1', style({
        transform: 'rotate(-45deg) translate(-9px, 5px)',
    })),
    state('invisible', style({
        opacity: 0,
    })),
    state('cross2', style({
        transform: 'rotate(45deg) translate(-8px, -5px)'
    })),
    transition('cross1 <=> menu, cross2 <=> menu, invisible <=> menu', [
        animate('3s ease-in-out')
    ])
]);