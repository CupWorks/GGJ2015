﻿/// <reference path="framework/fullscreenState.ts"/>

module Octopussy {
    export class Level extends FullscreenState {

        create() {
            super.create();

            this.stage.setBackgroundColor('#FF9933');
        }
    }
}  