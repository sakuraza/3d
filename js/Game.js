Game = function(canvasId) {
    // Canvas et engine défini ici
    var canvas = document.getElementById(canvasId);
    var engine = new BABYLON.Engine(canvas, true);  //Créer un moteur graphique basé sur Babylon, auquel on va affecter notre canvas
    var _this = this;   //Va nous être utiles dans les boucles de notre classe.
    
    // On initie la scène avec une fonction associé à l'objet Game
    this.scene = this._initScene(engine);

    //On initialise la caméra
    var _player = new Player(_this, canvas);

    var _arena = new Arena(_this);
    
    // Permet au jeu de tourner
    engine.runRenderLoop(function () {  //engine.runRenderLoop va se charger de générer les frames. Tout ce qui sera défini la dedans sera effectué des que possible.
        _this.scene.render();
    });

    // Ajuste la vue 3D si la fenetre est agrandi ou diminué
    window.addEventListener("resize", function () {
        if (engine) {
            engine.resize();    //ajuste la taille du render 3D si la fenêtre change de taille.
        }
    },false);

};

Game.prototype = {
    // Prototype d'initialisation de la scène
    _initScene : function(engine) {
        var scene = new BABYLON.Scene(engine);  //Lascène de notre jeu
        scene.clearColor=new BABYLON.Color3(0.9,0.9,0.9); //Couleur de fond de notre application. Il prend en compte un Color3 , qui demande une valeur entre 0 et 1 sur Rouge, Vert et Bleu (0.9,0.9,0.9 correspond à gris clair).
        return scene;
    }
};