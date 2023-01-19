import { animate, state, style, transition, trigger } from "@angular/animations";

export const sidebarAnimation = trigger('openClose', [
    state('open', style({
        bottom: 0,
        width: 'calc(35px + 16rem)',
    })),
    //state('open-full', style({
      //width: '100vw'
    //})),
    state('closed', style({
        bottom: 0,
        width: 'calc(35px + 3rem)',
    })),
    state('open-m', style({
        left: 0,
        bottom: 0,
    })),
    state('closed-m', style({
        left: 0,
    })),
    transition('open <=> closed', [
      animate('0.3s ease-in-out'),
    ]),
    transition('open-m <=> closed-m', [
      animate('0.3s ease-in-out'),
    ]),
    //transition('open-full <=> open', [
      //animate('0.1s ease-in-out')
    //])
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
        animate('0.3s ease-in-out')
    ])
]);
