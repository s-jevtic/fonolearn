import { animate, state, style, transition, trigger } from "@angular/animations";

export const sidebarAnimation = trigger('openClose', [
    state('open', style({
        width: 'calc(35px + 16rem)',
    })),
    //state('open-full', style({
      //width: '100vw'
    //})),
    state('closed', style({
        width: 'calc(35px + 3rem)',
    })),
    state('open-m', style({
        height: '12rem',
    })),
    state('closed-m', style({
        height: '3rem',
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
