Player = function(game, canvas) {
    // La scène du jeu
    this.scene = game.scene;

    // Initialisation de la caméra
    this._initCamera(this.scene, canvas);
    
};

Player.prototype = {
    _initCamera : function(scene, canvas) {
        // On crée la caméra
        //Caméra libre
        this.camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5, -10), scene);

        // On demande à la caméra de regarder au point zéro de la scène
        this.camera.setTarget(BABYLON.Vector3.Zero());  //setTarget va définir où la caméra va regarder à la création de la scène, BABYLON.Vector3.Zero() permet de regarder au centre 0 de la scène.

        // On affecte le mouvement de la caméra au canvas
        this.camera.attachControl(canvas, true);    //attachControl va permettre de rendre la camera active avec le clavier et la souris.

        //Caméra libre
        /*var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5, -10), scene);   //FreeCamera est définie par : un id, une position de caméra, la scene dans laquelle elle est ajoutée.
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas, true);*/

        //Caméra ArcRotate
        /*ArcRotateCamera est définie par :
        un id ;
        une valeur alpha  .alpha ;
        une valeur beta  .beta ;
        un rayon  .radius ;
        la position du pivot  target ;
        la scène.*/
        /*var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
        camera.attachControl(canvas, true);*/
    }
};