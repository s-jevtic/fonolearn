import { animate, state, style, transition, trigger } from "@angular/animations";

export const sidebarAnimationDesktop = trigger('openClose', [
    state('open', style({
      width: 'calc(35px + 16rem)',
    })),
    state('closed', style({
      width: 'calc(35px + 3rem)',
    })),
    transition('open <=> closed', [
      animate('0.3s ease-in-out')
    ]),
]);

export const sidebarAnimationMobile = trigger('openClose', [
  state('open', style({
    width: '100vw',
    right: 0
  })),
  state('closed', style({
    width: 'calc(35px + 3rem)',
  })),
  transition('open <=> closed', [
    animate('0.3s ease-in-out')
  ]),
]);

export function sidebarAnimation() {
  const isMobile = matchMedia("(max-width: 768px)").matches;
  
  return isMobile? sidebarAnimationMobile : sidebarAnimationDesktop;
}

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