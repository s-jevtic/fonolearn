import { animate, animateChild, group, query, state, style, transition, trigger } from "@angular/animations";

export const sidebarAnimation = trigger('openClose', [
    state('open', style({
        height: '12rem',
    })),
    state('closed', style({
        height: '3rem',
    })),
    transition('open <=> closed', [
        group([
            query('@changeIcon', animateChild()),
            animate('0.3s ease-in-out'),
        ])
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
    state('upwards-r', style({
        transform: 'rotate(180deg)',
    })),
    state('upwards-l', style({
        transform: 'rotate(-180deg)',
    })),
    state('downwards', style({
        transform: 'unset',
    })),
    transition('upwards-r <=> downwards, upwards-l <=> downwards', [
        animate('0.3s ease-in-out')
    ])
]);
