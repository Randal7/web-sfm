'use strict';

App.Utils = {};

App.Utils.promiseImage = function(id){
    return new Promise(function(resolve, reject){
        IDBAdapter.promiseData(SFM.STORE_FULLIMAGES, id).then(function(dataURL){
            var img = document.createElement('img');
            img.onload = function(){
                resolve(img);
            };
            img.src = dataURL
        }, reject);
    });
};

App.Utils.drawFeatures = function(ctx, features, offsetX, offsetY, scale, options){
    options = options || {};
    _.defaults(options, {
        color: 'red',
        markSize: 3
    });
    ctx.beginPath();
    ctx.strokeStyle = options.color;
    ctx.lineWidth = options.markSize/2;
    features.forEach(function(feature){
        var x = offsetX + scale*feature.col,
            y = offsetY + scale*feature.row;
        ctx.moveTo(x-options.markSize, y);
        ctx.lineTo(x+options.markSize, y);
        ctx.moveTo(x, y-options.markSize);
        ctx.lineTo(x, y+options.markSize);
    });
    ctx.stroke();
};


/**
 * It needs navigate, beginNavigation, releaseNavigation
 */
App.Utils.Navigatable = Ember.Mixin.create({

    windowMouseMove: null,

    windowMouseUp: null,

    getMouseMoveHandler: function(){
        var handler = this.get('windowMouseMove');
        if (!_.isFunction(handler)) {
            handler = this.navigate.bind(this);
            this.set('windowMouseMove', handler);
        }
        return handler;
    },

    getMouseUpHandler: function(){
        var handler = this.get('windowMouseUp');
        if (!_.isFunction(handler)) {
            handler = function(){
                window.removeEventListener('mousemove', this.getMouseMoveHandler(), false);
                window.removeEventListener('mouseup', this.getMouseUpHandler(), false);
                this.releaseNavigation();
            }.bind(this);
            this.set('windowMouseUp', handler);
        }
        return handler;
    },

    mouseDown: function(e){
        e.preventDefault();
        this.beginNavigation(e);
        window.addEventListener('mousemove', this.getMouseMoveHandler(), false);
        window.addEventListener('mouseup', this.getMouseUpHandler(), false);
    },

    contextMenu: function(){ return false; }

});