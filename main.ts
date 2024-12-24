enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Title = SpriteKind.create()
    export const Kat = SpriteKind.create()
    export const Target = SpriteKind.create()
    export const Spider = SpriteKind.create()
    export const SMR = SpriteKind.create()
    export const Mark = SpriteKind.create()
    export const Camera = SpriteKind.create()
    export const MOM = SpriteKind.create()
    export const CAGEDHARRY = SpriteKind.create()
    export const CHRISTMASTREE = SpriteKind.create()
    export const HARRY = SpriteKind.create()
    export const PLATE = SpriteKind.create()
    export const FOOD1 = SpriteKind.create()
    export const BADFOOD = SpriteKind.create()
}
function SpawnTextSprite (text: string, X: number, Y: number) {
    textSprite = textsprite.create(text)
    textSprite.x = X
    textSprite.y = Y
    textSprite.setOutline(1, 15)
}
function John_and_Kathleens_Room2 () {
    JKROOM()
    Kathleen = sprites.create(img`
        . . . . . f f e e f f . . . . . 
        . . . . e e e e e e e f . . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . f e e e b e 4 4 e b e e e f . 
        . f e e f f 4 4 4 4 f f e e f . 
        . f e e f b f 4 4 f b f e e f . 
        . f e e d 1 f 4 4 f 1 d e e f . 
        f f e e f 4 4 4 4 4 4 f e e f f 
        f e e f f f d d d d f f f e e f 
        . f d d f b 7 7 7 7 b f d d f . 
        . . d 4 c 7 7 7 7 7 7 c 4 d . . 
        . . d f b 7 b 7 b 7 b b f d . . 
        . . . f f 7 d 7 d 7 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Kat)
    tiles.placeOnTile(Kathleen, tiles.getTileLocation(21, 2))
    John = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f e e e e e e e e f f . . 
        . . f e e 2 2 2 2 2 2 e e f . . 
        . . f e 2 d d d d d d 2 e f . . 
        . . f d d d e e e e d d d f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        f f e e e d d d d d d e e e f f 
        f e e f e e 4 e e 4 e e f e e f 
        f e f f f 2 2 2 2 2 2 f f f e f 
        f f 4 d f 2 2 2 2 2 2 f d 4 f f 
        . f 4 4 f d d 5 5 d d f 4 4 f . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(John, tiles.getTileLocation(21, 3))
    color.startFade(color.White, color.originalPalette, 500)
    color.pauseUntilFadeDone()
    controller.moveSprite(John)
    scene.cameraFollowSprite(John)
}
sprites.onOverlap(SpriteKind.PLATE, SpriteKind.BADFOOD, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(-5)
})
function HALLWAY () {
    music.stopAllSounds()
    music.setVolume(20)
    tiles.setCurrentTilemap(tilemap`level1`)
    music.play(music.createSong(assets.song`Serenade for Strings`), music.PlaybackMode.LoopingInBackground)
}
function INCORRECT_ANIMATION () {
    music.stopAllSounds()
    scene.setBackgroundColor(15)
    tiles.setCurrentTilemap(tilemap`level35`)
    sprites.destroy(John)
    color.startFade(color.Black, color.originalPalette, 500)
    color.pauseUntilFadeDone()
    music.play(music.createSong(hex`0090010408030100001c00010a006400f401640000040000000000000000000000000005000004900000000400012c04000800012a08000c0001290c001000012710001400012514001800012418001c0001221c002000012020002400011e24002800011d28002c00011b2c003000011930003400011834003800011638003c0001143c004000011240004400011144004800010f48004c00010d4c005000010c50005400010a54005800010858005c0001065c0060000105`), music.PlaybackMode.InBackground)
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f e e e e e e e e f f . . 
        . . f e e 2 2 2 2 2 2 e e f . . 
        . . f e 2 d d d d d d 2 e f . . 
        . . f d d d e e e e d d d f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        f f e e e d d d d d d e e e f f 
        f e e f e e 4 e e 4 e e f e e f 
        f e f f f 2 2 2 2 2 2 f f f e f 
        f f 4 d f 2 2 2 2 2 2 f d 4 f f 
        . f 4 4 f d d 5 5 d d f 4 4 f . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(scene.screenWidth(), scene.screenHeight() / 0)
    mySprite.setVelocity(-100, 0)
    pause(500)
    DRAGON = sprites.create(img`
        ................................
        .............cc22...............
        .............c2c2...............
        ...........cc2ccc...............
        ......cccccc22c...cc22..........
        ......ccccc22cc...cc22..........
        ...ccc66666666ccccc2cc..........
        ..c66666666666666b2cc...........
        ..c666666ff666666bccc...........
        .c666666f666666666b...c22.......
        c666666f226bb666666bbc2cc.......
        c66bb6f22666666666666bc.........
        c66bb6626666666666666bc.........
        c666666666666666666666b.........
        .c1bbb1bbb666667776666b..c2.....
        .c1bbb1bbb666667776666b..cc.....
        c16331bbbbb667777776667ccc......
        .c6333bbbbb667777777777bbcc.....
        .c6333bbbbb667777777777bbcc.....
        .c63333bbb666777777777777ccccc..
        .c63333bb66bbb666b7777777cccc7c.
        .c63333666bbb6666b77777777b777c.
        .c63333666bbb6666b77777777b777c.
        ..c666666b66666bb7777777777777c.
        ...ccccbbc666bb6667bb77777777cc.
        ...ccccbbc666bb6667bb77777777cc.
        ......cbbbccc66dddbbbb77777ccc..
        .....cddddcccdddddbccbbbbcc.....
        .....cddddcccdddddbccbbbbcc.....
        .....ccccccdd6666ddcccccc.......
        ..........ccccccccccc...........
        ................................
        `, SpriteKind.Player)
    DRAGON.setPosition(scene.screenWidth(), scene.screenHeight() / 0)
    DRAGON.setVelocity(-125, 0)
    pause(2000)
    game.showLongText("YOU GOT EATEN BY A DRAGON... BECAUSE THAT MAKES SENSE...", DialogLayout.Bottom)
    game.gameOver(false)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile94`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("DEAR DIARY, I AM WRITING THIS DOWN SO I WON'T FORGET IT!", DialogLayout.Center)
        game.showLongText("JOKES: WHY DO YOU NEVER SEE ELEPHANTS HIDING IN THE TREES?", DialogLayout.Center)
        game.showLongText("ANSWER: BECAUSE THEY'RE THAT GOOD!!! HA!!!", DialogLayout.Center)
    }
})
sprites.onOverlap(SpriteKind.MOM, SpriteKind.Player, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        MOMINTERACTIONS += 1
        if (MOMINTERACTIONS == 1) {
            MOMFIRSTINTERACTION()
        }
        if (MOMINTERACTIONS == 2) {
            MOMSECONDINTERACTION()
        }
    }
})
function SARAHFIRSTINTERACTION () {
    game.showLongText("EEEEEKKKKKK!!! JOHN THANK GOODNESS YOU'RE HERE!", DialogLayout.Bottom)
    game.showLongText("THERE ARE LIKE A MILLION LADYBUGS IN HERE AGAIN", DialogLayout.Bottom)
    game.showLongText("CAN YOU HELP CATCH THEM ALL???", DialogLayout.Bottom)
    color.startFade(color.originalPalette, color.White, 500)
    color.pauseUntilFadeDone()
    sprites.destroy(SARAH)
    sprites.destroy(John)
    tiles.setCurrentTilemap(tilemap`level23`)
    scene.setBackgroundImage(img`
        bbdddcbbbbbddddcf99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbddd11111111111111111111111111111111111111111111111111111111d11111111111111111111111111111111111111111111111111111111dddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1d1111111111111111111111111111111111111111111111111111111d1111111111111111111111111111111111111111111111111111111d1ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd11d111111111111111111111111111111111111111111111111111111d111111111111111111111111111111111111111111111111111111d11ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd111d1111111111111111111111111111111111111111111111111111d1d1111111111111111111111111111111111111111111111111111d111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111dddddddddddddddddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111dffffffffffffffffffffffffffffffffffffffffffffffffffd111dffffffffffffffffffffffffffffffffffffffffffffffffffd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111dffffffffffffffffffffffffffffffffffffffffffffffffffd111dffffffffffffffffffffffffffffffffffffffffffffffffffd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111dddddddddddddddddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd111d1111111111111111111111111111111111111111111111111111d1d1111111111111111111111111111111111111111111111111111d111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbddddd111111111111111111111111111111111111111111111111111111d111111111111111111111111111111111111111111111111111111dddddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd111d1111111111111111111111111111111111111111111111111111d1d1111111111111111111111111111111111111111111111111111d111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111dddddddddddddddddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111dffffffffffffffffffffffffffffffffffffffffffffffffffd111dffffffffffffffffffffffffffffffffffffffffffffffffffd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111df999999999999999999999999999999999999999999999999fd111df999999999999999999999999999999999999999999999999fd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111dffffffffffffffffffffffffffffffffffffffffffffffffffd111dffffffffffffffffffffffffffffffffffffffffffffffffffd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1111dddddddddddddddddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddd1111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd111d1111111111111111111111111111111111111111111111111111d1d1111111111111111111111111111111111111111111111111111d111ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd11d111111111111111111111111111111111111111111111111111111d111111111111111111111111111111111111111111111111111111d11ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbdd1d1111111111111111111111111111111111111111111111111111111d1111111111111111111111111111111111111111111111111111111d1ddbf99fcbbbbdddcbbbbdd
        bbdddcbbbbbddddcf99fbddd11111111111111111111111111111111111111111111111111111111d11111111111111111111111111111111111111111111111111111111dddbf99fcbbbbdddcbbbbdd
        bbdddcbbbfffdddcf99fbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbf99fcbbbbdddcbbbbdd
        fffddcbbf999fddcf99fbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbf99fcbbfffddcbbfffd
        999fdcbf99999fdcf99fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf99fcbf999fdcbf999f
        9999fff9999999fff99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99fff99999fff99999
        `)
    John = sprites.create(img`
        ..............................
        ............ffffffff..........
        ..........ffbbbbbbbbfffff.....
        ........ffbbb1d1d1dbbb444f....
        .......fbbbd1d1d1d1d14bd44f...
        .......fbb11d1d1d1d14bdbd4f...
        ........fbbbbb1d1d1d4dbdb4f...
        .........ffffbbbbbbb4bdb4f....
        ......ffff...fffffffb444f.....
        ....fff22fff......fbcfff......
        ...fff2222fff.....fcf.........
        ..ffeeeeeeeeff...fbcf.........
        ..fee222222eef..fbcf..........
        ..fe2dddddd2ef..fcf...........
        ..fdddeeeedddf.fbcf...........
        .ffefbf44fbfeffbcf............
        .fee41fddf14eefcf.............
        ffeeeddddddeeebcf.............
        feefee4ee4eefbcf..............
        fefff222222ffcef..............
        ff4df222222fdcff..............
        .f44fdd55ddf44f...............
        .....ffffff...................
        .....ff..ff...................
        `, SpriteKind.Player)
    controller.moveSprite(John)
    music.stopAllSounds()
    color.startFade(color.White, color.originalPalette, 500)
    color.pauseUntilFadeDone()
    game.showLongText("CATCH 50 LADYBUGS IN 60 SECONDS BUT WATCH OUT FOR LIZARDS!", DialogLayout.Bottom)
    info.startCountdown(60)
    music.setVolume(40)
    music.play(music.createSong(hex`00910004080d0100001c00010a006400f4016400000400000000000000000000000000050000046f0308000a0001270a000c0001290c000e00012a0e0012000324272c12001400012c14001600012a16001a00012c1a001e00012c1e0022000225292200260002242726002a000222252a002e000225292e0032000320242732003400012734003600012536003a0001273a003e0001273e00420002202442004600021e2246004a00021d204a004c000220244c004e0001274e005200021e2252005400021e2254005600012756005a00021d205a005c00021d205c005e0001275e006200021b1e62006400021b1e64006600012766006a00021e226a006c00021e226c006e0001276e0072000220247200740002202474007600012776007a00021d207a007c00021d207c007e0001277e008200021e2282008600021d2086008a00021e228a008c0001278c008e0001298e009000012a900094000324272c94009600012c96009800012a98009c00012c9c00a000012ca000a400022529a400a800022427a800ac00022225ac00b000022529b000b40003202427b400b6000127b600b8000125b800bc000127bc00c0000127c000c400022024c400c800021e22c800cc00021d20cc00ce00022024ce00d0000127d000d400021e22d400d600021e22d600d8000127d800dc00021d20dc00de00021d20de00e0000127e000e400021b1ee400e600021b1ee600e8000127e800ec00021e22ec00ee00021e22ee00f0000127f000f400022024f400f600022024f600f8000127f800fc00021e22fc00fe00021e22fe000001012700010401012004010801011d08010c010218200c010e0101270e011001012910011201012a120116010324272c16011801012c18011a01012a1a011e01012c1e012201012c2201260102252926012a010224272a012e010222252e013201022529320136010320242736013801012738013a0101253a013e0101273e01420101274201460102202446014a01021e224a014e01021d204e01500102202450015201012752015601021e2256015801021e2258015a0101275a015e01021d205e016001021d2060016201012762016601021b1e66016801021b1e68016a0101276a016e01021e226e017001021e22700172010127720176010220247601780102202478017a0101277a017e01021d207e018001021d2080018201012782018601021e2286018a01021d208a018e01021e228e019001012790019201012992019401012a94019c010324272c`), music.PlaybackMode.LoopingInBackground)
    Lizard_Spawn += 1
    Ladybug_Spawn += 1
}
sprites.onOverlap(SpriteKind.PLATE, SpriteKind.FOOD1, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
function Kit_corner_movement () {
    if (KIT.tileKindAt(TileDirection.Center, sprites.dungeon.floorDarkDiamond)) {
        KIT.setVelocity(-100, randint(-100, 100))
    }
    if (KIT.tileKindAt(TileDirection.Center, sprites.dungeon.floorDark3)) {
        KIT.setVelocity(randint(-100, 100), -100)
    }
    if (KIT.tileKindAt(TileDirection.Center, sprites.dungeon.floorDark5)) {
        KIT.setVelocity(100, randint(-100, 100))
    }
    if (KIT.tileKindAt(TileDirection.Center, sprites.dungeon.floorMixed)) {
        KIT.setVelocity(randint(-100, 100), 100)
    }
}
sprites.onOverlap(SpriteKind.Spider, SpriteKind.Player, function (sprite, otherSprite) {
    music.setVolume(50)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
    pause(1000)
})
function DADSECONDINTERACTION () {
    game.showLongText("OH GREAT YOU FOUND THE NOTES!", DialogLayout.Bottom)
    game.showLongText("LETS GO LOOK FOR IT SHALL WE!", DialogLayout.Bottom)
    CORRECTGUESSES = 0
    color.startFade(color.originalPalette, color.Black, 500)
    color.pauseUntilFadeDone()
    sprites.destroy(Dad)
    Guessing_Game()
}
function DADFIRSTINTERACTION () {
    game.showLongText("HELLO JOHN! I CANNOT SEEM TO FIND THE VIDEO CAMERA", DialogLayout.Bottom)
    game.showLongText("I HID IT LAST YEAR BECAUSE OF CRIME", DialogLayout.Bottom)
    game.showLongText("I KNOW I LEFT SOME NOTES ON HOW TO FIND IT SOMEWHERE AROUND HERE ", DialogLayout.Bottom)
}
function Downstairs () {
    music.stopAllSounds()
    music.setVolume(20)
    tiles.setCurrentTilemap(tilemap`level41`)
    music.play(music.createSong(hex`00c8000408200200001c00010a006400f4016400000400000000000000000000000000050000047c0100001000010810002000010f20003000010830004000010f40005000010850006000010f60007000010d70008000011480009000010d9000a0000114a000b000010fb000c0000116c000d000010fd000e0000112e000f0000114f0000001011800011001010810012001010f20013001010830014001010f40015001010850016001010f60017001010d70018001011480019001010d9001a0010114a001b001010fb001c0010114c001d001010fd001e0010112e001f0010114f0010002020f1600021002011410022002011220023002011130024002010f40025002011450026002010f60027002011470028002010f80029002010d9002a0020111a002b0020108b002c002010fc002d002010ad002e002018ee002f002010ff0020003010f00031003011410032003011220033003011130034003010f40035003011450036003010f60037003011470038003010f80039003010d9003a0030111a003b0030108b003c003010fc003d003010fd003e0030112e003000402141801001c000f05001202c102c201000405002800000064002800031400060200045c0200000800011b08001000012410001800012218002000012020003800011b38003c00011b3c004000011b40004800011b48005000012450005800012258006000012060007800011d80008800011d8800900001259000980001249800a0000122a000b800011ec000c8000127c800d0000127d000d8000125d800e0000122e000f800012400010801011b08011001012410011801012218012001012020013801011b40014801011b48015001012450015801012258016001012060017801011d78018001011d80018801011d8801900101259001980101249801a0010122a001a8010127a801b0010127b001b8010127b801c0010127c001c8010129c801d0010127d001d8010125d801e0010122e001f0010120f0010002021e2700020802022024080210020220241002200202202420022802022024280230020220243002400202202440024802012448025002012750025c0201205c02600201226002780202202480028802012588029002012590029c0201259c02a0020125a002a8020125a802b0020124b002b8020124b802bc020124bc02c0020124c002c8020124c802d0020122d002d8020122d802e0020124e002f0020122f0020003021e2700030803022024080310030220241003200302202420032803022024280330030220243003400302202440034803012448035003012750035c0301205c03600301226003780302202480038803012588039003012590039c0301259c03a0030125a003a8030125a803b0030124b003b8030124b803bc030124bc03c0030124c003c8030127c803d0030127d003d8030125d803e0030122e00300040120`), music.PlaybackMode.LoopingInBackground)
}
function John_and_Kathleens_Room () {
    JKROOM()
    Kathleen = sprites.create(img`
        . . . . . f f . . . . . . . . . 
        . . . . f e f f f f f . . . . . 
        . . d d d e e e e e e f f . . . 
        . f f 4 d f e e e e e e e f . . 
        . f b c f f f d f f e e e e e . 
        f 7 7 7 b f 4 1 b f b e e e e f 
        f d b 7 7 d 4 f f 4 e e e e e f 
        b 7 7 7 7 d 4 4 4 4 4 e e e e e 
        b d b 7 7 d 4 4 4 4 4 e e e e e 
        f 7 7 7 7 d 4 f f 4 e e e e e f 
        f d b 7 b f 4 1 b f b e e e e f 
        . f b c f f f d f f e e e e f . 
        . f f 4 d f e e e e e e e f . . 
        . . d d d e e e e e e f f . . . 
        . . . . f e f f f f f . . . . . 
        . . . . . f f . . . . . . . . . 
        `, SpriteKind.Kat)
    tiles.placeOnTile(Kathleen, tiles.getTileLocation(21, 2))
}
function WinningtheKitGame () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Spider)
    KIT.setVelocity(0, 0)
    music.stopAllSounds()
    music.setVolume(50)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    pause(200)
    game.showLongText("YOU DID IT!", DialogLayout.Bottom)
    color.startFade(color.originalPalette, color.White, 500)
    color.pauseUntilFadeDone()
    sprites.destroyAllSpritesOfKind(SpriteKind.Target)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    John_and_Kathleens_Room2()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Camera, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        music.setVolume(50)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        game.showLongText("YOU FOUND IT!!!", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.White, 500)
        color.pauseUntilFadeDone()
        sprites.destroy(camera)
        Dad = sprites.create(img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 2 2 2 2 b f 4 e 
            4 d f 2 2 2 2 2 2 f d 4 
            4 4 f 1 1 1 1 1 1 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `, SpriteKind.Mark)
        tiles.placeOnTile(John, tiles.getTileLocation(12, 14))
        tiles.placeOnTile(Dad, tiles.getTileLocation(13, 14))
        animation.runImageAnimation(
        Dad,
        [img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f f 4 e 
            f e 4 d d d d d d f d 4 
            . f e d d b b d d f 4 4 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b . . . 
            4 d f 1 1 1 1 1 1 . . . 
            4 4 f 6 6 6 6 6 6 . . . 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f 4 e 
            f f f 4 4 4 4 e e f d 4 
            f 4 e 4 4 4 4 4 4 f 4 4 
            f 4 4 f f 4 4 f f 4 f f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b . . . 
            4 d f 1 1 1 1 1 1 . . . 
            4 4 f 6 6 6 6 6 6 . . . 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . 2 . . 2 . . 2 . . 2 . 
            . 2 . . 2 . . 2 . . 2 . 
            . . . . . . . . . f 4 e 
            . 2 . . 2 f f 2 . f 2 4 
            . . f f e e e e f f 4 4 
            . f f e e e e e e f f f 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b . . . 
            4 d f 1 1 1 1 1 1 . . . 
            4 4 f 6 6 6 6 6 6 . . . 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f 4 e 
            f f f 4 4 4 4 e e f d 4 
            f 4 e 4 4 4 4 4 4 f 4 4 
            f 4 4 f f 4 4 f f 4 f f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b . . . 
            4 d f 1 1 1 1 1 1 . . . 
            4 4 f 6 6 6 6 6 6 . . . 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f f 4 e 
            f e 4 d d d d d d f d 4 
            . f e d d b b d d f 4 4 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b . . . 
            4 d f 1 1 1 1 1 1 . . . 
            4 4 f 6 6 6 6 6 6 . . . 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `],
        200,
        true
        )
        MOMDADSROOM()
        color.startFade(color.White, color.originalPalette, 500)
        color.pauseUntilFadeDone()
    }
})
info.onCountdownEnd(function () {
    if (SARAHINTERACTIONS == 1) {
        music.stopAllSounds()
        game.showLongText("YOU SUCCOMBED TO THE BUGS", DialogLayout.Bottom)
        game.gameOver(false)
    }
    if (MOMINTERACTIONS == 1) {
        music.stopAllSounds()
        game.showLongText("YOU SUCCOMBED TO THE BREAKFAST", DialogLayout.Bottom)
        game.gameOver(false)
    }
})
function SARAHSECONDINTERACTION () {
    game.showLongText("THANK YOU SO MUCH JOHN! NOW I CAN GO AND OPEN PRESENTS!", DialogLayout.Bottom)
    game.showLongText("OH YOU SAY MOM AND DADS DOOR IS LOCKED?...", DialogLayout.Bottom)
    game.showLongText("HAVE YOU TRIED JIGGLING THE HANDLE?", DialogLayout.Bottom)
    SARAH.setVelocity(32, 0)
    pause(2000)
    sprites.destroy(SARAH)
    Keys = 2
}
function Guessing_Game () {
    music.stopAllSounds()
    tiles.setCurrentTilemap(tilemap`level32`)
    tiles.placeOnTile(John, tiles.getTileLocation(5, 15))
    color.startFade(color.Black, color.originalPalette, 500)
    color.pauseUntilFadeDone()
    music.play(music.createSong(hex`0082000408080106001c00010a006400f401640000040000000000000000000000000000000002c00000000800012208001000012710001800012218002000011b20002800012228003000012730004000012240004800012248005000012750005800012258006000012760006800012a6c007000012970007400012774007800012578007c0001247c008000012480008800012288009000012790009800012298009c00011e9c00a0000120a000a8000122a800b0000127b000c0000122c000c8000127cc00d0000124d000d8000122d800e0000120e000e800011ee800f000011df000f800011b`), music.PlaybackMode.LoopingInBackground)
}
info.onScore(25, function () {
    Lizard_Spawn = 2
})
function MOMSECONDINTERACTION () {
    game.showLongText("THANK YOU SO MUCH JOHN! NOW I CAN GO AND OPEN PRESENTS!", DialogLayout.Bottom)
    game.showLongText("CAN YOU PLEASE GO WAKE UP YOUR BROTHER", DialogLayout.Bottom)
    game.showLongText("BE CAREFUL THOUGH HE HAS BEEN VERY SLEEPY LATELY", DialogLayout.Bottom)
    sprites.destroy(MOM, effects.halo, 500)
    Keys = 3
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.CAGEDHARRY, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        game.showLongText("YOU UNLOCKED THE CRATE!!", DialogLayout.Bottom)
        sprites.destroy(CAGED_HARRY)
        FREED_HARRY += 1
        HARRY = sprites.create(img`
            . . . . e e e . . . . e e e . . 
            . . . e e e e f . . f e e e e . 
            . . e e e e e e f f e e e e e e 
            . . e e e f f 1 1 1 e f f e e e 
            . . f e f f 1 1 f f e e f f e f 
            . . . f f 1 1 1 1 f e e e f f . 
            . . . . f 1 f 1 1 1 e f e f . . 
            f f . . f 1 1 1 e e 1 e e f . . 
            f 1 f . f 6 1 1 f f 1 1 e f . . 
            f 1 1 f e e 6 6 6 6 6 6 f . . . 
            . f 1 e e 1 1 1 1 1 1 e f . . . 
            . . f f 1 1 e 1 1 1 1 1 f . . . 
            . . . f 1 f f 1 f f f 1 f . . . 
            . . . f f . . f f . . f f . . . 
            `, SpriteKind.HARRY)
        HARRY.sayText("BARK BARK", 200, false)
        tiles.placeOnTile(HARRY, tiles.getTileLocation(12, 6))
        HARRY.follow(John, 75)
    }
})
function JKROOM () {
    music.stopAllSounds()
    music.setVolume(20)
    tiles.setCurrentTilemap(tilemap`level2`)
    music.play(music.createSong(assets.song`Andante Festivo`), music.PlaybackMode.LoopingInBackground)
}
sprites.onOverlap(SpriteKind.SMR, SpriteKind.Player, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        SARAHINTERACTIONS += 1
        if (SARAHINTERACTIONS == 1) {
            SARAHFIRSTINTERACTION()
        }
        if (SARAHINTERACTIONS == 2) {
            SARAHSECONDINTERACTION()
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(-5)
    music.setVolume(50)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
    scene.cameraShake(5, 200)
})
function SARAHS_ROOM () {
    music.stopAllSounds()
    music.setVolume(5)
    tiles.setCurrentTilemap(tilemap`level19`)
    music.play(music.createSong(assets.song`SUGAR PLUM`), music.PlaybackMode.LoopingInBackground)
}
info.onScore(90, function () {
    if (MOMINTERACTIONS == 1) {
        info.stopCountdown()
        FOODSPAWN = 0
        sprites.destroyAllSpritesOfKind(SpriteKind.BADFOOD)
        sprites.destroyAllSpritesOfKind(SpriteKind.FOOD1)
        game.showLongText("YOU DID IT!!!", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.White)
        color.pauseUntilFadeDone()
        sprites.destroy(PLATE)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        Downstairs()
        John = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f e e e e e e e e f f . . 
            . . f e e 2 2 2 2 2 2 e e f . . 
            . . f e 2 d d d d d d 2 e f . . 
            . . f d d d e e e e d d d f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            f f e e e d d d d d d e e e f f 
            f e e f e e 4 e e 4 e e f e e f 
            f e f f f 2 2 2 2 2 2 f f f e f 
            f f 4 d f 2 2 2 2 2 2 f d 4 f f 
            . f 4 4 f d d 5 5 d d f 4 4 f . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        controller.moveSprite(John)
        scene.cameraFollowSprite(John)
        MOM = sprites.create(img`
            . . . . . f f f f . . . . . 
            . . . f f e e e e f f . . . 
            . . f e e e e e e e e f . . 
            . f e e e e e e e e e e f . 
            . f e e e d b b d e e e f . 
            f e e e b 4 4 4 4 b e e e f 
            f e e c c 4 4 4 4 c c e e f 
            f b b f b f 4 4 f b f b b f 
            f b b 4 1 f d d f 1 4 b b f 
            . f b f d d d d d d f b f . 
            . f e f e 4 4 4 4 e f e f . 
            . e 4 f 6 9 9 9 9 6 f 4 e . 
            . 4 d c 9 9 9 9 9 9 c d 4 . 
            . 4 f b 3 b 3 b 3 b b f 4 . 
            . . f f 3 b 3 b 3 3 f f . . 
            . . . . f f b b f f . . . . 
            `, SpriteKind.MOM)
        CHRISTMAS_TREE = sprites.create(img`
            ........................
            ...........66...........
            ..........6776..........
            ..........6776..........
            .........877778.........
            ........86777768........
            .......6777777776.......
            ......677677776776......
            ......866777777668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....86868868868668.....
            ....866888668888868.....
            ....8688886888888888....
            ....8886688888866888....
            ....8676888868886768....
            ...87778868678688776....
            ..8777767767787767778...
            .877767777777677776778..
            .8866777777777777776778.
            .8667776776767776777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888688888
            8668868866888866888868..
            88886686688888868688668.
            .8688888888888888668868.
            .8878888868868878868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `, SpriteKind.CHRISTMASTREE)
        animation.runImageAnimation(
        CHRISTMAS_TREE,
        [img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ...........55...........
            ...........55...........
            ..........6776..........
            ..........6776..........
            .........877778.........
            ........86777768........
            .......6727777276.......
            ......677627726776......
            ......866777777668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....86868868868668.....
            ....866188668888868.....
            ....8688886881881888....
            ....8886688888866888....
            ....8676881868886768....
            ...87778868678688776....
            ..8777767767787767778...
            .877267777777677776278..
            .8866772777277727776778.
            .8667776776767776777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888688888
            8668868866888866888168..
            88886686618888868688668.
            .8681888888888188668868.
            .8878888868868878868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........5..5..........
            ...........55...........
            ...........55...........
            ..........5775..........
            ..........6776..........
            .........877778.........
            ........86777768........
            .......6727777276.......
            ......677627726776......
            ......866777777668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....85858868868668.....
            ....866188668585858.....
            ....8658586851581888....
            ....8886658585856588....
            ....8676881868886768....
            ...87778858578688776....
            ..8777767767787767778...
            .877267777777677776278..
            .8866772777277727776778.
            .8667776776767776777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888658888
            8668868865888866885158..
            88885686515888568685668.
            .8651588858885158668868.
            .8875888868868578868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `,img`
            ........................
            ........................
            ........................
            .........5....5.........
            ..........5555..........
            ..........5555..........
            ..........5555..........
            ..........5555..........
            .........567765.........
            .........877778.........
            ........86777768........
            .......6727227276.......
            ......677627726776......
            ......866272272668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....86868868868668.....
            ....866188668888868.....
            ....8688886881881888....
            ....8886688888866888....
            ....8676881868886768....
            ...87778868678688776....
            ..8727767767787767728...
            .872227277727672772228..
            .8862722272227222772778.
            .8667772776267726777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888688888
            8668868866888866888168..
            88886686618888868688668.
            .8681888888888188668868.
            .8878888868868878868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `,img`
            ........................
            .......5...55...5.......
            ........5......5........
            .........5.55.5.........
            ..........5555..........
            .....5.5.555555.5.5.....
            .....5.5.555555.5.5.....
            ..........5555..........
            .........567765.........
            ........58777785........
            .......5867777685.......
            .......6727227276.......
            ......677627726776......
            ......866272272668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....85858868868668.....
            ....866188668585858.....
            ....8658586851581888....
            ....8886658585856588....
            ....8676881868886768....
            ...87778858578688776....
            ..8272767767787767728...
            .877262727727672772228..
            .8826272772227222772778.
            .8667726276267726777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888658888
            8668868865888866885158..
            88885686515888568685668.
            .8651588858885158668868.
            .8875888868868578868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `,img`
            ........................
            ........................
            ........................
            .........5....5.........
            ..........5555..........
            ..........5555..........
            ..........5555..........
            ..........5555..........
            .........567765.........
            .........877778.........
            ........86777768........
            .......6727227276.......
            ......677627726776......
            ......866272272668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....85858868868668.....
            ....866188668585858.....
            ....8658586851581888....
            ....8886658585856588....
            ....8676881868886768....
            ...87778858578688776....
            ..8272767767787767728...
            .877262727727672772228..
            .8826272772227222772778.
            .8667726276267726777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888658888
            8668868865888866885158..
            88885686515888568685668.
            .8651588858885158668868.
            .8875888868868578868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........5..5..........
            ...........55...........
            ...........55...........
            ..........5775..........
            ..........6776..........
            .........877778.........
            ........86777768........
            .......6727777276.......
            ......677627726776......
            ......866777777668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....85858868868668.....
            ....866188668585858.....
            ....8658586851581888....
            ....8886658585856588....
            ....8676881868886768....
            ...87778858578688776....
            ..8777767767787767778...
            .877267777777677776278..
            .8866772777277727776778.
            .8667776776767776777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888658888
            8668868865888866885158..
            88885686515888568685668.
            .8651588858885158668868.
            .8875888868868578868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `],
        200,
        true
        )
        tiles.placeOnTile(John, tiles.getTileLocation(11, 10))
        tiles.placeOnTile(MOM, tiles.getTileLocation(10, 10))
        tiles.placeOnTile(CHRISTMAS_TREE, tiles.getTileLocation(14, 2))
        if (FREED_HARRY == 1) {
            HARRY = sprites.create(img`
                . . . . e e e . . . . e e e . . 
                . . . e e e e f . . f e e e e . 
                . . e e e e e e f f e e e e e e 
                . . e e e f f 1 1 1 e f f e e e 
                . . f e f f 1 1 f f e e f f e f 
                . . . f f 1 1 1 1 f e e e f f . 
                . . . . f 1 f 1 1 1 e f e f . . 
                f f . . f 1 1 1 e e 1 e e f . . 
                f 1 f . f 6 1 1 f f 1 1 e f . . 
                f 1 1 f e e 6 6 6 6 6 6 f . . . 
                . f 1 e e 1 1 1 1 1 1 e f . . . 
                . . f f 1 1 e 1 1 1 1 1 f . . . 
                . . . f 1 f f 1 f f f 1 f . . . 
                . . . f f . . f f . . f f . . . 
                `, SpriteKind.HARRY)
            tiles.placeOnTile(HARRY, tiles.getTileLocation(12, 10))
            HARRY.sayText("BARK BARK", 200, false)
            HARRY.follow(John, 75)
        } else {
            CAGED_HARRY = sprites.create(img`
                dddddddddddddddddddd
                ffffffffffffffffffff
                fbbbbbbbbbbbbbbbbbbf
                fbdddbeeedbddeebddbf
                fbdddbeeefbdfeebedbf
                fbddebeeeebfeeebeebf
                fbddebeff1b1effbeebf
                fbddfbff11bfeefbefbf
                fbdddbf111bfeeebfdbf
                fbdddbf1f1b1efebddbf
                fbffdbf111be1eebddbf
                fbf1fbf611bf11ebddbf
                fbf11bee66b666fbddbf
                fbdf1be111b11efbddbf
                fbddfb11e1be11fbddbf
                fbdddb1ff1bff1fbddbf
                fbdddbfddfbddffbddbf
                fbbbbbbbbbbbbbbbbbbf
                ffffffffffffffffffff
                fddddddddddddddddddf
                `, SpriteKind.CAGEDHARRY)
            tiles.placeOnTile(CAGED_HARRY, tiles.getTileLocation(12, 6))
            CAGED_HARRY.sayText("BARK! BARK!")
        }
        color.startFade(color.White, color.originalPalette, 500)
        color.pauseUntilFadeDone()
    }
})
function TransitionFadeToBlack (Time: number) {
    color.startFade(color.originalPalette, color.Black, Time / 2)
    color.pauseUntilFadeDone()
    color.startFade(color.Black, color.originalPalette, Time / 2)
}
function MOMDADSROOM () {
    music.stopAllSounds()
    music.setVolume(20)
    tiles.setCurrentTilemap(tilemap`level28`)
    music.play(music.createSong(hex`0096000408200200001c00010a006400f401640000040000000000000000000000000005000004aa0400000800021d2408000b00021d240b000e00021d240e001100021d2411001900021d2519002000021d2520002800021b2728003000021d2430004000021d2540004800021d2448004b00021d244b004e00021d244e005100021d2451005900021d2559006000021d2560006800021b2768007000021d2470008000021d2580008600012286008800012488008e0001228e009000012090009600011e96009800011d98009e00011b9e00a0000118a000a6000120a600a8000122a800ae000120ae00b000011eb000b600011db600b800011bb800be000119be00c000011dc000c600011bc600c8000119c800ce000118ce00d000011ed000d600011dd600d800011bd800de000119de00e0000120e000e6000122e600e8000120e800ee00011eee00f000011df000f8000124f8000001021b2400010801021d2408010b01021d240b010e01021d240e011101021d2411011901021d2519012001021d2520012801021b2728013001021d2430014001021d2540014801021d2448014b01021d244b014e01021d244e015101021d2451015901021d2559016001021d2560016801021b2768017001021d2470018001021d2580018601012286018801012488018e0101228e019001012090019601011e96019801011d98019e01011b9e01a001011ea001a6010124a601a8010125a801ae010124ae01b0010122b001b6010120b601b801011eb801be01011dbe01c0010120c001c6010125c601c8010124c801ce010122ce01d0010125d001d6010127d601d8010125d801de010124de01e0010127e001e6010129e601e8010127e801ee010125ee01f0010127f001f8010124f801000202242c00020802012008020b0201200b020e0201200e021102012011021902011d19022002011920022802011628023002011230023402010f34023802010c3802400202252c4002480202202948025002022025500258020219225802600202191e60026802021b2268027002022225700278020220277802800202242c80028802012088028b0201208b028e0201208e029102012091029902011d9902a0020119a002a8020116a802b0020112b002b402010fb402b802012cb802bc02012abc02c002012ac002c4020129c402c8020127c802cc020125cc02d0020124d002d4020122d402d8020120d802dc02011edc02e002011de002e402011be402e8020119e802ec020118ec02f0020116f002f802011800030803021d2408030b03021d240b030e03021d240e031103021d2411031903021d2519032003021d2520032803021b2728033003021d2430034003021d2540034803021d2448034b03021d244b034e03021d244e035103021d2451035903021d2559036003021d2560036803021b2768037003021d2470038003021d2580038603012286038803012488038e0301228e039003012090039603011e96039803011d98039e03011b9e03a003011ea003a6030124a603a8030125a803ae030124ae03b0030122b003b6030120b603b803011eb803be03011dbe03c0030120c003c6030125c603c8030124c803ce030122ce03d0030125d003d6030127d603d8030125d803de030124de03e0030127e003e6030129e603e8030127e803ee030125ee03f0030127f003f8030129f803000402202906001c00010a006400f401640000040000000000000000000000000000000002060300000800011808000b0001180b000e0001180e001100011811001900011819002000011820002800011828003000011830004000011840004800011848004b0001184b004e0001184e005100011851005900011859006000011860006800011868007000011870008000011880009800011d9800a0000116a000b800011bb800c0000114c000c8000119c800d0000112d000e0000118e000f0000111f000f8000112f8000001010f00010801011808010b0101180b010e0101180e011101011811011901011819012001011820012801011828013001011830014001011840014801011848014b0101184b014e0101184e015101011851015901011859016001011860016801011868017001011870018001011880019801011d9801a0010116a001b801011eb801c0010118c001c8010120c801d8010122d801e0010124e001e8010124e801f0010125f001f801011ef8010002012400020802011b08020b02011b0b020e02011b0e021102011b11021902011d28023002011230023402010f34023802010c38023c02010d3c024002010f40024402011144024802011248024c0201144c025002011450025402011654025802011858025c0201195c026002011860026402011664026802011468026c0201126c027002011170027402010f74027802010d78028002010c80028802011b88028b02011b8b028e02011b8e029102011b91029902011da802b0020116b002b8020112c002c8020111c802d002010cd002d8020111d802e0020116e002e802010fe802f0020116f002f8020112f802fb02011bfb02fe02011bfe020103011b01030803011808030b0301180b030e0301180e031103011811031903011819032003011820032803011828033003011830034003011840034803011848034b0301184b034e0301184e035103011851035903011859036003011860036803011868037003011870038003011880039803011d9803a0030116a003b803011eb803c0030118c003c8030119c803d0030122d003d803011bd803e003011ee003e8030120e803f003011bf003f8030120f80300040114`), music.PlaybackMode.LoopingInBackground)
}
function TransitionFadeToWhite (Time: number) {
    color.startFade(color.originalPalette, color.White, Time / 2)
    color.pauseUntilFadeDone()
    color.startFade(color.White, color.originalPalette, Time / 2)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Target, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        music.setVolume(15)
        music.play(music.createSong(assets.song`Jaws`), music.PlaybackMode.LoopingInBackground)
        // Increment interaction count
        Kitinteractions += 1
        // First interaction
        info.setLife(5)
        if (Kitinteractions == 1) {
            KIT.setVelocity(100, 100)
            Spider2 = sprites.create(img`
                ...faa..................................aaf.....
                ...faa..................................aaf.....
                ...faa..........ffaaaaaaaaaaff..........aaf.....
                ...faa.........faaaaaaaaaaaaaaf.........aaf.....
                ...faa.........faaaaaaaaaaaaaaf.........aaf.....
                ...faa.......ffaaaaaaaaaaaaaaaaff.......aaf.....
                ...faaa.....faaaaaaaaaaaaaaaaaaaaf.....aaaf.....
                ...faaa.....faaaaaaaaaaaaaaaaaaaaf.....aaaf.....
                a...ffa.....faaaaaa22222222aaaaaaf.....aff...a..
                a...ffa.....faaaaaaaa2222aaaaaaaaf.....aff...a..
                a...ffa.....faaaaaaaa2222aaaaaaaaf.....aff...a..
                a...ffa.....faaaaaaaaa22aaaaaaaaaf.....aff...a..
                a.....faa...faaaaaaaa2222aaaaaaaaf...aaf.....a..
                a.....faa...faaaaaaaa2222aaaaaaaaf...aaf.....a..
                aaa...faa...faaaaaa22222222aaaaaaf...aaf...aaa..
                faaa...ffa..faaaaaaaaaaaaaaaaaaaaf..aff...aaaf..
                faaa...ffa..faaaaaaaaaaaaaaaaaaaaf..aff...aaaf..
                .ffaaa.ffaaa.ffaaaaaaaaaaaaaaaaff.aaaff.aaaff...
                ...faaa..faa...faaaaaaaaaaaaaaf...aaf..aaaf.....
                ...faaa..faa...faaaaaaaaaaaaaaf...aaf..aaaf.....
                ....ffaaafaaaaa.ffaaaaaaaaaaff.aaaaafaaaff......
                ......faaafffaaaaaaaaaaaaaaaaaaaafffaaaf........
                ......faaafffaaaaaaaaaaaaaaaaaaaafffaaaf........
                .......ffaaa.ffaaaaaaaaaaaaaaaaff.aaaff.........
                .......ffaaa.ffaaaaaaaaaaaaaaaaff.aaaff.........
                .........faaaaaaaaaaaaaaaaaaaaaaaaaaf...........
                ..........fffffaaaaaaaaaaaaaaaafffff............
                ..........fffffaaaaaaaaaaaaaaaafffff............
                ...aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.....
                .aaafffffffffffaaaaaaaaaaaaaaaafffffffffffaaa...
                .aaafffffffffffaaaaaaaaaaaaaaaafffffffffffaaa...
                aaaf........aaaaaaaaaaaaaaaaaaaaaa........faaa..
                aff.......aaaffaaa2aaaaaaaa2aaaffaaa.......ffa..
                aff.......aaaffaaa2aaaaaaaa2aaaffaaa.......ffa..
                f........aaaf..aaaa22aaaa22aaaa..faaa........f..
                ......aaaaff....aaaaa2aa2aaaaa....ffaaaa........
                ......aaaaff....aaaaa2aa2aaaaa....ffaaaa........
                ....aaafff.....affaaaaaaaaaaffa.....fffaaa......
                ....aaf......aaf.....aaaa.....faa......faa......
                ....aaf......aaf.....aaaa.....faa......faa......
                ...aaaf......aaf..............faa......faaa.....
                ...aff.......aaf..............faa.......ffa.....
                ...aff.......aaf..............faa.......ffa.....
                .aaaff.........aff..........ffa.........ffaaa...
                .aaf............aaf........faa............faa...
                .aaf............aaf........faa............faa...
                .aaf......................................faa...
                `, SpriteKind.Spider)
            Spider2.follow(John, 60)
            tiles.placeOnTile(Spider2, tiles.getTileLocation(14, 14))
            for (let index = 0; index < 10; index++) {
                Spider1 = sprites.create(img`
                    a.....fffffff.....a.
                    a....afffffffa....a.
                    .f..afff222fffa..f..
                    .f..affff2ffffa..f..
                    .af.afff222fffa.fa..
                    f.a.afffffffffa.a.ff
                    f.af.afffffffa.fa.fa
                    .fffffafffffafffff..
                    ..af.afffffffa.fa...
                    ...fffffffffffff....
                    fffffffffffffffffff.
                    faaaaafffffffaaaaaff
                    ...ffaf2fff2faff...a
                    .ffa..ff2f2ff..aff..
                    .fa...afffffa...af..
                    fa...f.......f...af.
                    f....f.......f....f.
                    a.....fa...af.....af
                    `, SpriteKind.Spider)
                Spider1.setBounceOnWall(true)
                Spider1.setVelocity(randint(-100, 100), randint(-100, 100))
                tiles.placeOnTile(Spider1, tiles.getTileLocation(randint(2, 29), randint(2, 29)))
                pause(500)
            }
            MOVING_IN_SQUARE = 1
        } else if (Kitinteractions == 2) {
            WinningtheKitGame()
        }
    }
})
function DADTHIRDINTERACTION () {
    game.showLongText("THANK YOU SO MUCH JOHN! NOW I CAN GO AND OPEN PRESENTS!", DialogLayout.Bottom)
    game.showLongText("OH YOU SAY THE STAIRS ARE BLOCKED?", DialogLayout.Bottom)
    game.showLongText("HAVE YOU TRIED WALKING NORMALLY?", DialogLayout.Bottom)
    Dad.setVelocity(-32, 0)
    pause(1000)
    Dad.setVelocity(0, -32)
    pause(1000)
    Dad.setVelocity(-32, 0)
    pause(5000)
    sprites.destroy(Dad)
    Keys = 3
}
info.onScore(50, function () {
    if (SARAHINTERACTIONS == 1) {
        info.stopCountdown()
        Lizard_Spawn = 0
        Ladybug_Spawn = 0
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        game.showLongText("YOU DID IT!!!", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.White)
        color.pauseUntilFadeDone()
        sprites.destroy(John)
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        SARAHS_ROOM()
        SARAH = sprites.create(img`
            . e e e . e e e e . e e e . 
            e 5 5 e e 5 5 5 5 e e 5 5 e 
            e 5 e e b 5 5 5 5 b e e 5 e 
            e e e 4 3 5 5 5 5 3 4 e e e 
            . e 3 3 5 5 5 5 5 5 3 3 e . 
            . e 5 5 5 5 4 4 5 5 5 5 e . 
            . e e 5 5 4 4 4 4 5 5 e e . 
            . e e e b f 4 4 f b e e e . 
            . e e 4 1 f d d f 1 4 e e . 
            . . e e d d d d d d e e . . 
            . . f e f 4 4 4 4 f e f . . 
            . f 4 e b 3 3 3 3 b e 4 f . 
            . 4 d f 3 3 3 3 3 3 f d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.SMR)
        tiles.placeOnTile(SARAH, tiles.getTileLocation(2, 5))
        animation.runImageAnimation(
        SARAH,
        [img`
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . e e e . e e e e . e e e . 
            e 5 5 e e 5 5 5 5 e e 5 5 e 
            e 5 e e b 5 5 5 5 b e e 5 e 
            e e e 5 3 5 5 5 5 3 5 e e e 
            . e 3 3 5 5 5 5 5 5 3 3 e . 
            . e 5 5 5 5 4 4 5 5 5 5 e . 
            . e e 5 5 4 4 4 4 5 5 e e . 
            . e e e b f 4 4 f b e e e . 
            . e e 4 1 f d d f 1 4 e e . 
            . . e e d d d d d d e e . . 
            . . e e e 4 4 4 4 e e e . . 
            . e 4 e b 3 3 3 3 b e 4 e . 
            . 4 d c 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . 6 6 6 6 6 6 . . . . 
            . . . . 6 6 . . 6 6 . . . . 
            `,img`
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . e e e . e e e e . e e e . 
            e 5 5 e e 5 5 5 5 e e 5 5 e 
            e 2 e 2 b 5 5 5 5 b e e 5 e 
            2 2 2 2 2 5 5 5 5 3 5 e e e 
            . 2 2 2 5 5 5 5 5 5 3 3 e . 
            . e 2 5 5 5 4 4 5 5 5 5 e . 
            . e e 5 5 4 4 4 4 5 5 e e . 
            . e e e b f 4 4 f b e e e . 
            . e e 4 1 f d d f 1 4 e e . 
            . . e e d d d d d d e e . . 
            . . e e e 4 4 4 4 e e e . . 
            . e 4 e b 3 3 3 3 b e 4 e . 
            . 4 d c 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . 6 6 6 6 6 6 . . . . 
            . . . . 6 6 . . 6 6 . . . . 
            `,img`
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . e e e . e e e e . e e e . 
            2 5 5 e 2 5 5 5 5 e e 5 5 e 
            2 2 e 2 2 2 5 5 5 b e e 5 e 
            2 2 2 2 2 2 5 5 5 3 2 e 2 e 
            2 2 2 2 2 5 5 5 5 2 2 2 2 2 
            . 2 2 2 5 5 4 4 5 5 2 2 2 . 
            . e 2 5 5 4 4 4 4 5 5 2 e . 
            . e e e b f 4 4 f b e e e . 
            . e e 4 1 f d d f 1 4 e e . 
            . . e e d d d d d d e e . . 
            . . e e e 4 4 4 4 e e e . . 
            . e 4 e b 3 3 3 3 b e 4 e . 
            . 4 d c 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . 6 6 6 6 6 6 . . . . 
            . . . . 6 6 . . 6 6 . . . . 
            `,img`
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            2 e e e 2 2 e e e . e e e . 
            2 2 5 2 2 2 2 5 5 e e 5 5 e 
            2 2 2 2 2 2 2 5 5 2 e e 5 2 
            2 2 2 2 2 2 2 5 2 2 2 e 2 2 
            2 2 2 2 2 2 5 5 2 2 2 2 2 2 
            2 2 2 2 2 5 4 4 5 2 2 2 2 2 
            . 2 2 2 5 4 4 4 4 5 2 2 2 . 
            . e 2 e b f 4 4 f b e 2 e . 
            . e e 4 1 f d d f 1 4 e e . 
            . . e e d d d d d d e e . . 
            . . e e e 4 4 4 4 e e e . . 
            . e 4 e b 3 3 3 3 b e 4 e . 
            . 4 d c 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . 6 6 6 6 6 6 . . . . 
            . . . . 6 6 . . 6 6 . . . . 
            `],
        500,
        true
        )
        John = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f e e e e e e e e f f . . 
            . . f e e 2 2 2 2 2 2 e e f . . 
            . . f e 2 d d d d d d 2 e f . . 
            . . f d d d e e e e d d d f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            f f e e e d d d d d d e e e f f 
            f e e f e e 4 e e 4 e e f e e f 
            f e f f f 2 2 2 2 2 2 f f f e f 
            f f 4 d f 2 2 2 2 2 2 f d 4 f f 
            . f 4 4 f d d 5 5 d d f 4 4 f . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(John, tiles.getTileLocation(3, 6))
        controller.moveSprite(John)
        scene.cameraFollowSprite(John)
        color.startFade(color.White, color.originalPalette)
        color.pauseUntilFadeDone()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile95`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("THE NUMBERS ARE ON THE WALLS", DialogLayout.Center)
        game.showLongText("OPEN THE DOORS THAT MATCH THE CHARACTERS AND THE NUMBERS", DialogLayout.Center)
        game.showLongText("WAIT I JUST HAD A GREAT IDEA FOR A JOKE", DialogLayout.Center)
    }
})
function MOMFIRSTINTERACTION () {
    game.showLongText("HEY JOHN FRANKLIN! I'M MAKING BREAKFAST FOR EVERYONE!", DialogLayout.Bottom)
    game.showLongText("CAN YOU HELP ME COLLECT THE INGREDIENTS? ", DialogLayout.Bottom)
    game.showLongText("I AM MAKING EGGS, BACON, AND PANCAKES!", DialogLayout.Bottom)
    game.showLongText("WATCH OUT FOR ANYTHING THAT AREN'T THOSE THINGS!", DialogLayout.Bottom)
    color.startFade(color.originalPalette, color.White, 500)
    color.pauseUntilFadeDone()
    sprites.destroy(MOM)
    sprites.destroy(John)
    sprites.destroy(HARRY)
    sprites.destroy(CHRISTMAS_TREE)
    sprites.destroy(CAGED_HARRY)
    PLATE = sprites.create(img`
        . . . . . f f f f f f f f f f f f f . . . . . 
        . . f f f 1 1 1 d d d d d d d 1 1 1 f f f . . 
        . f 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 d 1 1 1 f . 
        f 1 1 1 d 1 1 d d d d d d d d d 1 1 d 1 1 1 f 
        f 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 d 1 1 1 1 f 
        f 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d 1 f 
        f 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d 1 f 
        f 1 1 d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 1 1 f 
        f 1 1 1 d d 1 1 1 1 1 1 1 1 1 1 1 d d d 1 1 f 
        f 1 1 1 1 d b d 1 1 1 1 1 1 1 d d b 1 1 1 1 f 
        . f 1 1 1 1 d b b b d d d d d d d 1 1 1 1 f . 
        . . f f f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f . . 
        . . . . . f f f f f f f f f f f f f . . . . . 
        `, SpriteKind.PLATE)
    tiles.setCurrentTilemap(tilemap`level45`)
    scene.centerCameraAt(5, 5)
    scene.setBackgroundImage(img`
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
        8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888886888888888888888888888886888888888888888688888888888888888888888688888888888888868888888888888888888888868888888888888886888888888888888888888886
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888886888888688888888888888888888888888888888688888868888888888888888888888888888888868888886888888888888888888888888888888886888888688888888
        8888888888888888888888888888886968888888888888888888888888888888888888696888888888888888888888888888888888888869688888888888888888888888888888888888886968888888
        8888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888688888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888838888888888888888888888888888888888888883888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
        8888888838888888888888888888888888888888888888883888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
        8888883333388888888888888888888888888888888888333338888888888888888888888888888888888833333888888888888888888888888888888888883333388888888888888888888888888888
        8888888333888888888888888888888888888888888888833388888888888888888888888888888888888883338888888888888888888888888888888888888333888888888888888888888888888888
        8888888383888888888888888888888888888888888888838388888888888888888888888888888888888883838888888888888888888888888888888888888383888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888886888888888888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888
        8888888888888888888888888888888886888688888888888888888888888888888888888688868888888888888888888888888888888888868886888888888888888888888888888888888886888688
        8888888888888888888d888888888888868888888888888888888888888d888888888888868888888888888888888888888d888888888888868888888888888888888888888d88888888888886888888
        888888888888888888ddd8888888888886888888888888888888888888ddd8888888888886888888888888888888888888ddd8888888888886888888888888888888888888ddd8888888888886888888
        8888888888888888888d888888888888666888888888888888888888888d888888888888666888888888888888888888888d888888888888666888888888888888888888888d88888888888866688888
        8888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888888888888888888888888888888888866888888
        8888888888888888888888688888888886888888888888888888888888888868888888888688888888888888888888888888886888888888868888888888888888888888888888688888888886888888
        8888886888888888888888688888888666688888888888688888888888888868888888866668888888888868888888888888886888888886666888888888886888888888888888688888888666688888
        8888886688888888888886668888888866688888888888668888888888888666888888886668888888888866888888888888866688888888666888888888886688888888888886668888888866688888
        8888886888888888888888688888866666888888888888688888888888888868888886666688888888888868888888888888886888888666668888888888886888888888888888688888866666888888
        8888866688888888888888666888886666668888888886668888888888888866688888666666888888888666888888888888886668888866666688888888866688888888888888666888886666668888
        8888886668888888888886668888888666668888888888666888888888888666888888866666888888888866688888888888866688888886666688888888886668888888888886668888888666668888
        8888866688888888888866668888866666688888888886668888888888886666888886666668888888888666888888888888666688888666666888888888866688888888888866668888866666688888
        6688886668888888888888666888888666666666668888666888888888888866688888866666666666888866688888888888886668888886666666666688886668888888888888666888888666666666
        6666666888888888888866668888666666666666666666688888888888886666888866666666666666666668888888888888666688886666666666666666666888888888888866668888666666666666
        6666666666688888888886666666666666666666666666666668888888888666666666666666666666666666666888888888866666666666666666666666666666688888888886666666666666666666
        6666666666666688888866666666666666666666666666666666668888886666666666666666666666666666666666888888666666666666666666666666666666666688888866666666666666666666
        6666666666667799999999999999776666666666666666666666779999999999999977666666666666666666666677999999999999997766666666666666666666667799999999999999776666666666
        6666666667799999999999999999999977666666666666666779999999999999999999997766666666666666677999999999999999999999776666666666666667799999999999999999999977666666
        6666666799999999999999999999999999997666666666679999999999999999999999999999766666666667999999999999999999999999999976666666666799999999999999999999999999997666
        6666679999999999999999999999996111199977666667999999999999999999999999611119997766666799999999999999999999999961111999776666679999999999999999999999996111199977
        7779999999996999999999999999996999111997777999999999699999999999999999699911199777799999999969999999999999999969991119977779999999996999999999999999996999111997
        9999999999996999999999999999996699911119999999999999699999999999999999669991111999999999999969999999999999999966999111199999999999996999999999999999996699911119
        1999999999996699999999999999966999999111199999999999669999999999999996699999911119999999999966999999999999999669999991111999999999996699999999999999966999999111
        1119999999966699999999999999996999999991111999999996669999999999999999699999999111199999999666999999999999999969999999911119999999966699999999999999996999999991
        9911119999996999999999999999966669999999991111999999699999999999999996666999999999111199999969999999999999999666699999999911119999996999999999999999966669999999
        9999999999966699999999999999996699999999999999999996669999999999999999669999999999999999999666999999999999999966999999999999999999966699999999999999996699999999
        9999999999996669999999999911166619999999999999999999666999999999991116661999999999999999999966699999999999111666199999999999999999996669999999999911166619999999
        9999999999966999999999911119966669999999999999999996699999999991111996666999999999999999999669999999999111199666699999999999999999966999999999911119966669999999
        9999999999966699999991111999996666999999999999999996669999999111199999666699999999999999999666999999911119999966669999999999999999966699999991111999996666999999
        9999999999666669999111199999666669999999999999999966666999911119999966666999999999999999996666699991111999996666699999999999999999666669999111199999666669999999
        9999999999966699111111999999966666699999999999999996669911111199999996666669999999999999999666991111119999999666666999999999999999966699111111999999966666699999
        1111999996666661111199999999666666999911111199999666666111119999999966666699991111119999966666611111999999996666669999111111999996666661111199999999666666999911
        1111111996666699999999999999996666911111111111199666669999999999999999666691111111111119966666999999999999999966669111111111111996666699999999999999996666911111
        1111111166666666999999999996666691111111111111116666666699999999999666669111111111111111666666669999999999966666911111111111111166666666999999999996666691111111
        1111111111666669999999999999666911111111111111111166666999999999999966691111111111111111116666699999999999996669111111111111111111666669999999999999666911111111
        1111111116666666999999999999691111111111111111111666666699999999999969111111111111111111166666669999999999996911111111111111111116666666999999999999691111111111
        1111111166666666661111199999111111111111111111116666666666111119999911111111111111111111666666666611111999991111111111111111111166666666661111199999111111111111
        1111111666666666661119999111111111111111111111166666666666111999911111111111111111111116666666666611199991111111111111111111111666666666661119999111111111111111
        1111111116666666199999111111111111111111111111111666666619999911111111111111111111111111166666661999991111111111111111111111111116666666199999111111111111111111
        1111111166666666699111111111111111111111111111116666666669911111111111111111111111111111666666666991111111111111111111111111111166666666699111111111111111111111
        1111111666666666661111111111111111111111111111166666666666111111111111111111111111111116666666666611111111111111111111111111111666666666661111111111111111111111
        1111111116666666666111111111111111111111111111111666666666611111111111111111111111111111166666666661111111111111111111111111111116666666666111111111111111111111
        1111111666666666661111111111111111111111111111166666666666111111111111111111111111111116666666666611111111111111111111111111111666666666661111111111111111111111
        1111111166666666611111111111111119999911111111116666666661111111111111111999991111111111666666666111111111111111199999111111111166666666611111111111111119999911
        9111111111666666661111111111111991111199911111111166666666111111111111199111119991111111116666666611111111111119911111999111111111666666661111111111111991111199
        9999111666666666661111111111999111111111999911166666666666111111111199911111111199991116666666666611111111119991111111119999111666666666661111111111999111111111
        1199991166666666666111111199111111111111119999116666666666611111119911111111111111999911666666666661111111991111111111111199991166666666666111111199111111111111
        1111999996666661111111199911111111111111111199999666666111111119991111111111111111119999966666611111111999111111111111111111999996666661111111199911111111111111
        1111119999999111111111911111111111111111111111999999911111111191111111111111111111111199999991111111119111111111111111111111119999999111111111911111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
    PLATE.setPosition(scene.screenWidth() / 2, 100)
    controller.moveSprite(PLATE, 100, 0)
    PLATE.setStayInScreen(true)
    FOODSPAWN += 1
    music.stopAllSounds()
    music.play(music.createSong(hex`0096000408200100001c00010a006400f40164000004000000000000000000000000000500000460030c001000012010001800012518001c0001241c002000012520003000012230003400012234003c0001273c004000012540004400012244005400012054005800012058006000012560006400012464006800012568007000012270007400011e74007800011e78007c0001227c008000012280008400012084008800012088008c0001208c009000012090009400012094009c00011e9c00a000011ea000a400011da400b400011db400b8000120b800c0000125c000c4000124c400c8000125c800d8000122d800dc000122dc00e4000127e400e8000125e800ec000122ec00fc000120fc000001012000010801012508010c0101240c011001012510011801012218011c01011e1c012001011e20012401012224012801012228012c0101202c013001012030013401012034013801012038013c0101203c014401011e44014801011e48014c01011d4c015c01011d5c016001012960016401012964016801012968017001012970017401012774017801012578018001012580018401012284018801012288018c0101228c019801012298019c0101279c01a0010127a001a4010127a401ac010127ac01b0010125b001b4010122b401bc010122bc01c0010120c001c4010120c401c8010120c801d4010120d401d8010129d801dc010129dc01e0010129e001e8010129e801ec010127ec01f0010125f001f8010125f801fc010122fc010002012200020402012204020802012208020c0201270c021002012510021402012414022002012420022402012524022802012728022c0201272c023002012730023802012738024802012548024c0201294c025002012950025402012954025c0201295c026002012760026402012564026c0201256c027002012270027402012274027802012278028402012284028802012788028c0201278c029002012790029802012798029c0201259c02a0020122a002a8020122a802ac020120ac02b0020120b002b4020120b402c0020120c002c4020129c402c8020129c802cc020129cc02d4020129d402d8020127d802dc020125dc02e4020125e402e8020122e802ec020122ec02f0020122f002f4020122f402f8020127f802fc020125fc020003012400030c0301240c031003012510031403012714031803012718031c0301271c0320030127200322030129220324030127240334030125`), music.PlaybackMode.LoopingInBackground)
    color.startFade(color.White, color.originalPalette, 500)
    color.pauseUntilFadeDone()
    game.showLongText("COLLECT 40 BREAKFAST FOODS IN 60 SECONDS TO BRING YOUR SCORE TO 90", DialogLayout.Bottom)
    info.startCountdown(60)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.setVolume(50)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(50)
})
function KATHLEEN_INTERACTION_2 () {
    game.showLongText("THANK YOU SO MUCH JOHN! NOW I CAN GO AND OPEN PRESENTS!", DialogLayout.Bottom)
    game.showLongText("OH YOU SAY THE DOOR IS LOCKED?... YOU KNOW ITS A PULL RIGHT?", DialogLayout.Bottom)
    Kathleen.setVelocity(0, 32)
    pause(500)
    Kathleen.setVelocity(-32, 0)
    pause(1500)
    Kathleen.setVelocity(0, 32)
    pause(1500)
    sprites.destroy(Kathleen)
    Keys = 1
}
function KATHLEEN_INTERACTION_1 () {
    game.showLongText("GOOD MORNING JOHN! I NEED YOUR HELP! KIT RAN UNDER THE BED! CAN YOU HELP ME FIND HER?", DialogLayout.Bottom)
    game.showLongText("P.S. WATCH OUT FOR SPIDERS! IT GETS REALLY SPIDERY DOWN THERE!", DialogLayout.Bottom)
    music.stopAllSounds()
    sprites.destroy(Kathleen)
    color.startFade(color.originalPalette, color.Black, 500)
    color.pauseUntilFadeDone()
    color.startFade(color.Black, color.originalPalette, 500)
    tiles.setCurrentTilemap(tilemap`level4`)
    color.pauseUntilFadeDone()
    game.showLongText("THIS BED MUST BE HUGE!... and poorly kept sheesh!", DialogLayout.Bottom)
    KIT = sprites.create(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f 7 d d 7 f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 7 f . f d f 
        . f 7 7 7 7 7 7 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.Target)
    Kitinteractions = 0
    MOVING_IN_SQUARE = 0
}
sprites.onOverlap(SpriteKind.Mark, SpriteKind.Player, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        DADINTERACTIONS += 1
        if (DADINTERACTIONS == 1) {
            DADFIRSTINTERACTION()
        }
        if (DADINTERACTIONS == 2) {
            DADSECONDINTERACTION()
        }
        if (DADINTERACTIONS == 3) {
            DADTHIRDINTERACTION()
        }
    }
})
let EGGS: Sprite = null
let milk: Sprite = null
let hamburger: Sprite = null
let LIZARD_2: Sprite = null
let LIZARD: Sprite = null
let pancake: Sprite = null
let bacon: Sprite = null
let ham: Sprite = null
let LADYBUG: Sprite = null
let fruit: Sprite = null
let MOVING_IN_SQUARE = 0
let Spider1: Sprite = null
let Spider2: Sprite = null
let Kitinteractions = 0
let CHRISTMAS_TREE: Sprite = null
let PLATE: Sprite = null
let HARRY: Sprite = null
let CAGED_HARRY: Sprite = null
let MOM: Sprite = null
let camera: Sprite = null
let Dad: Sprite = null
let CORRECTGUESSES = 0
let KIT: Sprite = null
let SARAH: Sprite = null
let DRAGON: Sprite = null
let mySprite: Sprite = null
let Kathleen: Sprite = null
let textSprite: TextSprite = null
let FREED_HARRY = 0
let FOODSPAWN = 0
let Ladybug_Spawn = 0
let Lizard_Spawn = 0
let John: Sprite = null
let MOMINTERACTIONS = 0
let DADINTERACTIONS = 0
let SARAHINTERACTIONS = 0
let Keys = 0
TransitionFadeToWhite(1000)
let TitleScreen = sprites.create(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f9f99999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffff9999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f2d2f9999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fd2df9999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f2d2f9999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd2df9999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbff111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbff111bbbbbbbbbbbbbbbf2d2f9999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbfbbfff1bbbbbbbbbbbbbbbbbbbbbbbbbbbfbbfff1bbbbbbbbbbbbbbfd2df9999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbfbbbbfbffbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbfbffbbbbbbbbbbbbff2d2f9999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbbbffd2dff999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbf9991fbfbbbbbbbbbbbbbbbbbbbbbbbbbbf9991fbfbbbbbbbbbbbbfcf2d2fcf99999999
    999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbf1999fbfbbbbbbbbbbbbbbbbbbbbbbbbbbf1999fbfbbbbbbbbbbbbfcfd2dfccf9999999
    99999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbfffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffbbbbbbbbbbbbfccf2d2fcccf999999
    9999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbf9991ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf9991ffbbbbbbbbbbbbfccfd2dfccfff99999
    9999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbf1999ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf1999ffbbbbbbbbbbbfcccf2d2fffddf99999
    999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffbbbbbbbbbbb11fcccfd2dfddddf99999
    99999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfe11bbbbbbbbbbbbbb1efccfff2d2fddddf99999
    9999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffee1fffffffffffffeefffdffd21ffdddf99999
    9999999999999999999999999999999999999999999999999999999999999999999999fddddddddddddddddddddddddddddddddddddddddddddddddddfeeeddddddddddd11eeeddd1f22effdddf99999
    9999999999999999999999999999999999999999999999999999999999999999999999fd22222d22222d22222d22222d22222d22222d22222d22222d22fee122222d2221eeeffddfef21efddddf99999
    9999999999999999999999999999999999999999999999999999999999999999999999fd22222d22222d22222d22222d22222d22222d22222d22222d222fee12222d22feeeefdddfef1eefdddd1ef999
    9999999999999999999999999999999999999999999999999999999999999999999999fddddddddddddddddddddddddddddddddddddddddddddddddddddfeee111ddddfeeeffdddfef1effddd1eef999
    9999999999999999999999999999999999999999999999999999999999999999999999f222d22222d22222d22222d22222d22222fffff2d22222d22222d2feeeee122feeeeffdddfeeeeffddd1eef999
    9999999999999999999999999999999999999999999999999999999999999999999999f222d22222d22222d22222d22222d2222f99f99fd22222111111122feeeee22feeef2fddddeeefdfdd1eeef999
    9999999999999999999999999999999999999999999999999999999999999999999999fddddddddfffffffffffffddddddddddf91f9f19fdddd1eeeeeee1fffeeeeddfeeefdfddddeeef2fd11eef9999
    9999999999999999999999999999999999999999999999999999999999999999999999fd22222d2f99991f99991f222d22222dfffffffff222feeeeeeeee199feeee2feeef2fddd1eeef211eeeef9999
    9999999999999999999999999999999999999999999999999999999999999999999999fd22222d2f91919f91919f222d22222df199f991f22feeeeeeeeee119ffeee1feeef2fdd1eeef11eeeeeef9999
    9999999999999999999999999999999999999999999999999999999999999999999999fddddddddf19999f19999fddddddddddf919f919fddfeeefffffeeee11feeeeffeefdf11eeef21eeeeeef99999
    9999999999999999999999999999999999999999999999999999999999999999999999f222d2222fffffffffffffd22222d222f999f999f2feeef2222feeeee11ffeeefeee2feeeeff1eeeeefff99999
    9999999999999999999999999999999999999999999999999999999999999999999999f222d2222f99991f99991fd22222d222ffff9ffff2feffd2222fffeeeee1feeeeeee1eeeefdf1eeeeefdf99999
    9999999999999999999999999999999999999999999999999999999999999999999999fddddddddf91919f91919fddddddddddf999f999fddfdddddddf99feeeee1feeeeeeeeeefdd1eeeeefddf99999
    9999999999999999999999999999999999999999999999999999999999999999999999fd22222d2f19999f19999f222d22222df919f919f22d22222d2f999feeeee1feeeeeeeeefd1eeeeffdddf99999
    9999999999999999999999999999999999999999999999999999999999999999999999fd22222d2fffffffffffff222d22222df199f991f22d22222d2fffffffeeeeefeeeeeeefd11eeeefddddf99999
    9999999999999999999999999999999999999999999999999999999999999999999999fddddddddddddddddddddddddddddddddfffffffddddddddddddddddddfeeeeeeeeeeeeeeeeeeeffddddf99999
    9999999999999999999999999999999999999999999999999999999999999999999999f222d22222d22222d22222d22222d22222d22222d22222d22222d22222dfeeeeeeeeeeeeeeeeef2fddddf99999
    9999999999999999999999999999999999999999999999999999999999999999999999f222d2222fffffffffffffd22222d22222d22222d22222d2222ffffffffffeeeeeeeeeeeeeeef22fddddf99999
    9999999999999999999999999999999999999999999999999999999999999999999999fddddddddf99991f99991fdddddddddddddddddddddddddddddf99991f9feeeeeeeeeeeeeeeed2dfddddf99999
    9999999999999999999999999999999999999999999999999999999999999999999999fd22222d2f91919f91919f222d22222d2fffffff222d22222d2f91919f9feeeeeeeeeeeeeeee2d2fddddf99999
    9999999999999999999999999999999999999999999999999999999999999999999999fd22222d2f19999f19999f222d22222df2222222f22d22222d2f19999f19feeeeeeeeeeeeeffd2dfddddf99999
    9999999999999999999999999999999999999999999999999999999999999999999999fddddddddfffffffffffffddddddddddf2f222f2fddddddddddffffffffffeeeeeeeeeeeeeffd2dfddddf99999
    9999999999999ffffffffffffffffffffffff999999999999999999999999999999999f222d2222f99991f99991fd22222d222ff2f2f2ff22222d2222f99991f99feeeeeeeeeeeefdf2d2fddddf99999
    9999999999fff11111111111111111111111fffff99999999999999999999999999999f222d2222f91919f91919fd22222d222ff2f2f2ff22222d2222f91919f919feeeeeeeeeeefdfd2dfddddf99fff
    9999999fff1111111111111111111111111111111ff999999999999999999999999999fddddddddf19999f19999fddddddddddff2f2f2ffddddddddddf19999f199feeeeeeeeeeefdf22dfddddfff111
    fffffff11111111111111111111111111111111111ff99999999999999999999999999fd22222d2fffffffffffff222d22222df2f222f2f22d22222d2ffffffffffffeeeeeeeeeefdf2d2fdddf111111
    11111111111111111111111111111111111111111111ff999999999999999999999999fd22222d22222d22222d22222d22222df2222222f22d22222d22222d22222dfeeeeeeeeeefdfd2dfdff1111111
    1111111111111111111111111111111111111111111111ffffff999999999999999999fdddddddddddddddddddddddddddddddf2222225fddddddddddddddddddddddfeeeeeeeefddf222ff111111111
    1111111111111111111111111111111111111111111111111111fffffff99999999999f222d22222d22222d22222d22222d222f2222222f22222d22222d22222d2222feeeeeeeefddf2fff1111111111
    11111111111111111111111111111111111111111111111111111111111fff99999999f222d22222d22ffffffffffffffff222f2222222f22222d22222d22222d2222feeeeeeeeffffff111111111111
    11111111111111111111111111111111111111111111111111111111111111ffff9999fddddddddffff1111111111111111ffff2222222fddddddddddddddddfffffffeeeeeeeef11111111111111111
    111111111111111111111111111111111111111111111111111111111111111111fffff222fffff11111111111111111111111f2222222f22d22222d222ffff111111feeeeeeeef11111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111fffff111111111111111111111111111fffffffffffffffffffff1111111111feeeeeeeef11111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111ffff11111111111111111111111111111111111111111111111111111111111111feeeeeeef111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111fff11111111111111111111111111111111111111111111111111111111111111111feeeeeeeef111111111111111111
    1111111111111111111111111111111111111111111111111111111111111fff11111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeef11111111111111111
    11111111111111111111111111111111111111111111111111111111111fff1111111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeef11111111111111111
    1111111111ffff11111111111111111111111111111111111111111111ff111111111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeef11111111111111111
    11111fffff9999fffffff11111111111111111111111111fffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeef11111111111111111
    11ffff999999999999999ffffffffffff111111111111fff99999999ff11111111111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeef11111111111111111
    ff9999999999999999999999999999999ffffffffffff9999999999f111111111111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeeef11111111111111111
    f9999999999999999999999999999999999999999999999999999ff1111111111111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeeef11111111111111111
    f9999999999999999999999999999999999999999999999999999f11111111111111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeeef11111111111111111
    f999999999999999999999999999999999999999999999999999ff11111111111111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeeef11111111111111111
    f99999999999999999999999999999999999999999999999999ff111111111111111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeeef11111111111111111
    f99999999999999999999999999999999999999999999999999f1111111111111111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeeef11111111111111111
    1fff99999999999999999999999999999999999999999999999f111111111111111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeeeef11111111111111111
    1111ff99999999999999999999999999999999999999999999ff111111111111111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeeeeff1111111111111111
    111111fffff999999999999999999999999999999999999999f111111111111111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeeeeeff1111111111111111
    1111111111fffffff999999999999999999999999999999999f11111111111111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeeeeeeef1111111111111111
    1111111111111111ffff9999999999999999999fffffffff9f11111111111111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeeeeeeeeff111111111111111
    11111111111111111111ffffffffffffffffffff1111111fff11111111111111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeeeeeeeeeef11111111111111
    111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeeeeeeeeeef11111111111111
    11111111111111111111111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111feeeeeeeeeeeeeeeeeeff1111111111111
    1111111111111111111111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111ffeeeeeeeeeeeeeeef111111111111111
    1111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111fffeeeeeeeeeeef1111111111111111
    111111111111111111111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffff11111111111111111
    11111111111111111111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111
    fff11111111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11fffffffffffffffffff1111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111ffff11111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111fff1111111111111ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111ff1111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111ff11111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111ffff1111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111fffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111fffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111ffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111ffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111ffffff1111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffff111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff1111111f111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `, SpriteKind.Title)
effects.blizzard.startScreenEffect()
let Note2 = "You Can Add Music Here!"
music.setVolume(5)
music.play(music.createSong(assets.song`Nutcracker`), music.PlaybackMode.LoopingInBackground)
pauseUntil(() => controller.A.isPressed())
SpawnTextSprite("JOHN'S CHRISTMAS ADVENTURE", scene.screenWidth() / 2, scene.screenHeight() / 10)
SpawnTextSprite("PRESS A TO START", scene.screenWidth() / 2, scene.screenHeight() - 20)
pause(100)
pauseUntil(() => controller.A.isPressed())
TransitionFadeToBlack(1000)
effects.blizzard.endScreenEffect()
sprites.destroyAllSpritesOfKind(SpriteKind.Title)
sprites.destroyAllSpritesOfKind(SpriteKind.Text)
pause(2000)
game.splash("HOWDY JOHN, WELCOME TO JOHN'S CHRISTMAS ADVENTURE")
game.splash("YOUR OBJECTIVE IS SIMPLE")
game.splash("HELP WAKE EVERYONE UP SO WE CAN OPEN PRESENTS!!!")
game.splash("GOOD LUCK!!!")
TransitionFadeToWhite(1000)
Keys = 0
let KathleenInteractions = 0
SARAHINTERACTIONS = 0
DADINTERACTIONS = 0
MOMINTERACTIONS = 0
John = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f e e e e e e e e f f . . 
    . . f e e 2 2 2 2 2 2 e e f . . 
    . . f e 2 d d d d d d 2 e f . . 
    . . f d d d e e e e d d d f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    f f e e e d d d d d d e e e f f 
    f e e f e e 4 e e 4 e e f e e f 
    f e f f f 2 2 2 2 2 2 f f f e f 
    f f 4 d f 2 2 2 2 2 2 f d 4 f f 
    . f 4 4 f d d 5 5 d d f 4 4 f . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(John)
scene.cameraFollowSprite(John)
John_and_Kathleens_Room()
Lizard_Spawn = 0
Ladybug_Spawn = 0
let BACONSPAWN = 0
FOODSPAWN = 0
let PANCAKESPAWN = 0
let MILKSPAWN = 0
let FRUITSPAWN = 0
let HAMSPAWN = 0
let HAMBURGERSPAWN = 0
FREED_HARRY = 0
game.onUpdate(function () {
    if (MOVING_IN_SQUARE == 1) {
        Kit_corner_movement()
    }
})
game.onUpdate(function () {
	
})
game.onUpdateInterval(randint(2500, 3000), function () {
    if (FOODSPAWN == 1) {
        fruit = sprites.create(img`
            . . . . . . . f . . . . . . . . 
            . . . . . . f f f . . . f f . . 
            . . . f f f 8 8 f f . f 7 f . . 
            . . f 2 2 2 2 e 8 f f 7 f . . . 
            . f 2 2 4 4 2 7 7 7 7 7 8 f . . 
            . f 2 4 4 2 6 7 7 7 6 7 6 f f . 
            f 2 4 f 2 2 6 7 7 6 2 7 7 f . . 
            f 2 4 4 2 2 6 7 6 2 2 6 7 7 f . 
            f 2 4 2 2 2 6 6 2 2 2 e 7 7 f . 
            f 2 4 2 2 f 2 2 2 f 2 2 e 7 f . 
            f 2 4 2 2 2 2 2 2 2 2 2 e f f . 
            f 2 2 2 2 2 2 2 f e 2 e e f . . 
            f f 2 f 2 2 f 2 2 e e e f . . . 
            f f f f 2 e 2 2 e e e f . . . . 
            f f f 2 e e f e f f f . . . . . 
            . f f f f f f f . . . . . . . . 
            `, SpriteKind.BADFOOD)
        fruit.setPosition(randint(0, scene.screenWidth()), 0)
        fruit.ay = randint(15, 25)
        fruit.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
game.onUpdateInterval(750, function () {
    if (Ladybug_Spawn == 1) {
        LADYBUG = sprites.create(img`
            . f f f . . . . . . . f f f . . 
            f . . . f . . . . . f . . . f . 
            . f . . . f . . . f . . . f . . 
            . . . . f f f f f f f . . . . . 
            . . . f c 1 f c f 1 c f . . . . 
            . . f c c 1 f c f 1 c c f . . . 
            . f 2 f c c c c c c c f 2 f . . 
            . f 2 2 f f f f f f f 2 2 f . . 
            f f f f 2 2 2 2 2 2 2 2 2 f f . 
            . f f f 2 2 f f 2 2 2 f f f . . 
            f f 2 2 2 2 f f 2 2 2 f f f f . 
            . f 2 2 2 2 2 2 2 2 2 2 2 f . . 
            f f 2 f f 2 2 2 2 f f 2 2 f f . 
            . . f f f 2 f f 2 f f 2 f . . . 
            . . . f 2 2 f f 2 2 2 f . . . . 
            . . . . f f f f f f f . . . . . 
            `, SpriteKind.Food)
        LADYBUG.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
        LADYBUG.setStayInScreen(true)
        LADYBUG.setVelocity(randint(-10, 10), randint(-10, 10))
    }
})
game.onUpdateInterval(randint(2000, 5000), function () {
    if (FOODSPAWN == 1) {
        ham = sprites.create(img`
            . . f f f f f f f . . . . . . . 
            . f f 4 4 4 4 4 4 f . . . . . . 
            f f 4 4 4 4 d d 4 4 f . . . . . 
            f b 4 4 4 4 4 4 d 4 f . . . . . 
            f b 4 4 4 4 4 4 4 d 4 f . . . . 
            f b 4 4 4 4 4 4 4 4 4 f . . . . 
            f b 4 4 4 4 4 4 4 4 4 f . . . . 
            f f b 4 4 4 4 4 4 4 b f . . . . 
            . f b b b 4 4 4 b b b f . . . . 
            . . f b b b b b b b f f . . . . 
            . . . f f b 4 4 b f f f f . . . 
            . . . . . f f f f f f f d f f . 
            . . . . . . . . . . . f 1 1 1 f 
            . . . . . . . . . . . f 1 d d f 
            . . . . . . . . . . . f 1 b f . 
            . . . . . . . . . . . . f f . . 
            `, SpriteKind.BADFOOD)
        ham.setPosition(randint(0, scene.screenWidth()), 0)
        ham.ay = randint(15, 25)
        ham.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
game.onUpdateInterval(randint(1500, 3000), function () {
    if (FOODSPAWN == 1) {
        bacon = sprites.create(assets.image`bacon`, SpriteKind.FOOD1)
        bacon.setPosition(randint(0, scene.screenWidth()), 0)
        bacon.ay = randint(20, 30)
        bacon.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
game.onUpdateInterval(randint(1500, 3000), function () {
    if (FOODSPAWN == 1) {
        pancake = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f . . 
            . f e e e e e e e e e e e e f . 
            f e e e e e 5 5 5 e e e e e e f 
            e e e e e e 5 5 5 e e e e e e e 
            d e e e e 5 e e e 5 e e e e e d 
            f d e e 5 e e e e e 5 e e e d f 
            e f d 5 d d d d d d 5 d d d f e 
            d e f 5 f f f f f f 5 f f f e d 
            f d e 5 e e e e e e e e e e d f 
            e f d 5 5 d d d d d d d d d f e 
            d e f f 5 f f f f f f f f f e d 
            f d e e 5 e e e e e e e e e d f 
            . f d d d d d d d d d d d d f . 
            . . f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.FOOD1)
        pancake.setPosition(randint(0, scene.screenWidth()), 0)
        pancake.ay = randint(20, 30)
        pancake.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
game.onUpdateInterval(randint(3000, 5000), function () {
    if (Lizard_Spawn == 1) {
        LIZARD = sprites.createProjectileFromSide(assets.image`LIZARD`, -65, 0)
        LIZARD.y = randint(0, scene.screenHeight())
    }
    if (Lizard_Spawn == 2) {
        LIZARD = sprites.createProjectileFromSide(assets.image`LIZARD`, -65, 0)
        LIZARD.y = randint(0, scene.screenHeight())
        LIZARD_2 = sprites.createProjectileFromSide(assets.image`LIZARD2`, 0, -100)
        LIZARD_2.x = randint(0, 160)
    }
})
game.onUpdateInterval(randint(2000, 4000), function () {
    if (FOODSPAWN == 1) {
        hamburger = sprites.create(img`
            . . . . f f f f f f f f . . . . 
            . . f f f 4 4 4 4 4 4 f f f . . 
            . f f 4 4 4 4 4 5 4 4 4 4 f f . 
            . f 4 4 4 4 4 4 4 4 4 5 4 4 f . 
            f b 4 5 4 4 5 4 4 4 4 4 4 4 b f 
            f b 4 4 4 4 4 4 4 4 4 4 5 4 4 f 
            f b b 4 4 4 4 4 4 4 4 4 4 4 b f 
            . f b 4 4 4 4 4 5 4 4 4 4 b f . 
            f 7 f f b 4 4 4 4 4 4 b f f 6 f 
            f 7 2 f f f f f f f f f f 2 7 f 
            f 6 6 2 2 2 2 2 2 2 2 2 2 6 c f 
            f c 6 7 6 6 7 7 7 6 6 7 6 c c f 
            f b e 8 8 c c 8 8 c c c 8 e b f 
            f f b e c c e e e e e c e b f f 
            . f f b b 4 4 4 4 4 4 4 4 f f . 
            . . . f f f f f f f f f f . . . 
            `, SpriteKind.BADFOOD)
        hamburger.setPosition(randint(0, scene.screenWidth()), 0)
        hamburger.ay = randint(15, 25)
        hamburger.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
game.onUpdateInterval(randint(2000, 4000), function () {
    if (FOODSPAWN == 1) {
        milk = sprites.create(assets.image`MILK`, SpriteKind.BADFOOD)
        milk.setPosition(randint(0, scene.screenWidth()), 0)
        milk.ay = randint(15, 25)
        milk.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
forever(function () {
    if (John.overlapsWith(Kathleen) && controller.A.isPressed()) {
        KathleenInteractions += 1
        if (KathleenInteractions == 1) {
            KATHLEEN_INTERACTION_1()
        }
        if (KathleenInteractions == 2) {
            KATHLEEN_INTERACTION_2()
        }
    }
    if (John.tileKindAt(TileDirection.Center, assets.tile`myTile8`) && (controller.B.isPressed() && Keys == 0)) {
        game.showLongText("THIS DOOR IS LOCKED", DialogLayout.Bottom)
    }
    if (John.tileKindAt(TileDirection.Center, sprites.dungeon.stairWest) && (controller.B.isPressed() && Keys < 3)) {
        game.showLongText("YOU CAN'T GO DOWN THERE! YOU MIGHT SEE YOUR PRESENTS!", DialogLayout.Bottom)
        game.showLongText("WAIT FOR DAD TO GET THE VIDEO CAMERA!", DialogLayout.Bottom)
    }
    if (John.tileKindAt(TileDirection.Center, assets.tile`myTile62`) && (controller.B.isPressed() && Keys == 0)) {
        game.showLongText("THIS DOOR IS LOCKED", DialogLayout.Bottom)
    }
    if (John.tileKindAt(TileDirection.Center, assets.tile`myTile161`) && controller.B.isPressed()) {
        game.showLongText("YOU CAN'T GO OUT THERE IT'S TOO COLD!", DialogLayout.Bottom)
    }
    if (John.tileKindAt(TileDirection.Center, assets.tile`myTile160`) && controller.B.isPressed()) {
        game.showLongText("YOU CAN'T GO OUT THERE IT'S TOO COLD!", DialogLayout.Bottom)
    }
    if (John.tileKindAt(TileDirection.Center, assets.tile`myTile8`) && (controller.B.isPressed() && Keys > 0)) {
        game.showLongText("YOU TRIED PULLING ON THE DOOR", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.White, 500)
        color.pauseUntilFadeDone()
        HALLWAY()
        tiles.placeOnTile(John, tiles.getTileLocation(17, 0))
        tiles.placeOnTile(HARRY, tiles.getTileLocation(17, 0))
        color.startFade(color.White, color.originalPalette, 500)
        color.pauseUntilFadeDone()
    }
    if (John.tileKindAt(TileDirection.Center, assets.tile`myTile62`) && (controller.B.isPressed() && Keys > 0)) {
        game.showLongText("YOU TRIED PULLING ON THE DOOR", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.White, 500)
        color.pauseUntilFadeDone()
        HALLWAY()
        tiles.placeOnTile(John, tiles.getTileLocation(2, 0))
        tiles.placeOnTile(HARRY, tiles.getTileLocation(2, 0))
        color.startFade(color.White, color.originalPalette, 500)
        color.pauseUntilFadeDone()
    }
    if (John.tileKindAt(TileDirection.Center, assets.tile`myTile59`) && (controller.B.isPressed() && Keys > 0)) {
        game.showLongText("YOU TRIED PULLING ON THE DOOR", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.White, 500)
        color.pauseUntilFadeDone()
        JKROOM()
        tiles.placeOnTile(John, tiles.getTileLocation(18, 7))
        tiles.placeOnTile(HARRY, tiles.getTileLocation(18, 7))
        color.startFade(color.White, color.originalPalette, 500)
        color.pauseUntilFadeDone()
    }
    if (John.tileKindAt(TileDirection.Center, assets.tile`myTile63`) && (controller.B.isPressed() && Keys > 0)) {
        game.showLongText("YOU TRIED PULLING ON THE DOOR", DialogLayout.Center)
        color.startFade(color.originalPalette, color.White, 500)
        color.pauseUntilFadeDone()
        JKROOM()
        tiles.placeOnTile(John, tiles.getTileLocation(5, 7))
        tiles.placeOnTile(HARRY, tiles.getTileLocation(5, 7))
        color.startFade(color.White, color.originalPalette, 500)
        color.pauseUntilFadeDone()
    }
    if (John.tileKindAt(TileDirection.Center, assets.tile`myTile56`) && (controller.B.isPressed() && Keys == 1)) {
        game.showLongText("YOU TRIED PULLING ON THE DOOR", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.White, 500)
        color.pauseUntilFadeDone()
        SARAHS_ROOM()
        tiles.placeOnTile(John, tiles.getTileLocation(6, 4))
        SARAH = sprites.create(img`
            . e e e . e e e e . e e e . 
            e 5 5 e e 5 5 5 5 e e 5 5 e 
            e 5 e e b 5 5 5 5 b e e 5 e 
            e e e 4 3 5 5 5 5 3 4 e e e 
            . e 3 3 5 5 5 5 5 5 3 3 e . 
            . e 5 5 5 5 4 4 5 5 5 5 e . 
            . e e 5 5 4 4 4 4 5 5 e e . 
            . e e e b f 4 4 f b e e e . 
            . e e 4 1 f d d f 1 4 e e . 
            . . e e d d d d d d e e . . 
            . . f e f 4 4 4 4 f e f . . 
            . f 4 e b 3 3 3 3 b e 4 f . 
            . 4 d f 3 3 3 3 3 3 f d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.SMR)
        tiles.placeOnTile(SARAH, tiles.getTileLocation(2, 5))
        animation.runImageAnimation(
        SARAH,
        [img`
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . e e e . e e e e . e e e . 
            e 5 5 e e 5 5 5 5 e e 5 5 e 
            e 5 e e b 5 5 5 5 b e e 5 e 
            e e e 5 3 5 5 5 5 3 5 e e e 
            . e 3 3 5 5 5 5 5 5 3 3 e . 
            . e 5 5 5 5 4 4 5 5 5 5 e . 
            . e e 5 5 4 4 4 4 5 5 e e . 
            . e e e b f 4 4 f b e e e . 
            . e e 4 1 f d d f 1 4 e e . 
            . . e e d d d d d d e e . . 
            . . e e e 4 4 4 4 e e e . . 
            . e 4 e b 3 3 3 3 b e 4 e . 
            . 4 d c 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . 6 6 6 6 6 6 . . . . 
            . . . . 6 6 . . 6 6 . . . . 
            `,img`
            . e e e . e e e e . e e e . 
            e 5 5 e e 5 5 5 5 e e 5 5 e 
            e 5 e e b 5 5 5 5 b e e 5 e 
            e e e 5 3 5 5 5 5 3 5 e e e 
            . e 3 3 5 5 5 5 5 5 3 3 e . 
            . e 5 5 5 5 4 4 5 5 5 5 e . 
            . e e 5 5 4 4 4 4 5 5 e e . 
            . e e e b f 4 4 f b e e e . 
            . e e 4 1 f d d f 1 4 e e . 
            . . e e d d d d d d e e . . 
            . . e e e 4 4 4 4 e e e . . 
            . e 4 e b 3 3 3 3 b e 4 e . 
            . 4 d c 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . 6 6 6 6 6 6 . . . . 
            . . . . 6 6 . . 6 6 . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . e e e . e e e e . e e e . 
            e 5 5 e e 5 5 5 5 e e 5 5 e 
            e 5 e e b 5 5 5 5 b e e 5 e 
            e e e 5 3 5 5 5 5 3 5 e e e 
            . e 3 3 5 5 5 5 5 5 3 3 e . 
            . e 5 5 5 5 4 4 5 5 5 5 e . 
            . e e 5 5 4 4 4 4 5 5 e e . 
            . e e e b f 4 4 f b e e e . 
            . e e 4 1 f d d f 1 4 e e . 
            . . e e d d d d d d e e . . 
            . . e e e 4 4 4 4 e e e . . 
            . e 4 e b 3 3 3 3 b e 4 e . 
            . 4 d c 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . 6 6 6 6 6 6 . . . . 
            . . . . 6 6 . . 6 6 . . . . 
            `],
        200,
        true
        )
        color.startFade(color.White, color.originalPalette, 500)
        color.pauseUntilFadeDone()
    }
    if (John.tileKindAt(TileDirection.Center, assets.tile`myTile56`) && (controller.B.isPressed() && Keys >= 2)) {
        game.showLongText("YOU TRIED PULLING ON THE DOOR", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.White, 500)
        color.pauseUntilFadeDone()
        SARAHS_ROOM()
        tiles.placeOnTile(John, tiles.getTileLocation(6, 4))
        tiles.placeOnTile(HARRY, tiles.getTileLocation(6, 4))
        color.startFade(color.White, color.originalPalette, 500)
        color.pauseUntilFadeDone()
    }
    if ((John.tileKindAt(TileDirection.Center, assets.tile`myTile60`) || John.tileKindAt(TileDirection.Center, assets.tile`myTile61`)) && (controller.B.isPressed() && Keys < 2)) {
        game.showLongText("THIS DOOR IS LOCKED", DialogLayout.Bottom)
    }
    if (John.tileKindAt(TileDirection.Center, assets.tile`myTile69`) && (controller.B.isPressed() && Keys >= 2)) {
        game.showLongText("YOU TRIED PULLING ON THE DOOR", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.White, 500)
        color.pauseUntilFadeDone()
        HALLWAY()
        tiles.placeOnTile(John, tiles.getTileLocation(2, 7))
        tiles.placeOnTile(HARRY, tiles.getTileLocation(2, 7))
        color.startFade(color.White, color.originalPalette, 500)
        color.pauseUntilFadeDone()
    }
    if ((John.tileKindAt(TileDirection.Center, assets.tile`myTile60`) || John.tileKindAt(TileDirection.Center, assets.tile`myTile61`)) && (controller.B.isPressed() && Keys > 2)) {
        game.showLongText("YOU TRIED JIGGLING THE HANDLE", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.White, 500)
        color.pauseUntilFadeDone()
        MOMDADSROOM()
        tiles.placeOnTile(John, tiles.getTileLocation(1, 11))
        tiles.placeOnTile(HARRY, tiles.getTileLocation(1, 11))
        color.startFade(color.White, color.originalPalette, 500)
        color.pauseUntilFadeDone()
    }
    if ((John.tileKindAt(TileDirection.Center, assets.tile`myTile109`) || John.tileKindAt(TileDirection.Center, assets.tile`myTile108`)) && (controller.B.isPressed() && Keys > 1)) {
        game.showLongText("YOU TRIED JIGGLING THE HANDLE", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.White, 500)
        color.pauseUntilFadeDone()
        HALLWAY()
        sprites.destroy(Dad)
        tiles.placeOnTile(John, tiles.getTileLocation(23, 3))
        tiles.placeOnTile(HARRY, tiles.getTileLocation(23, 3))
        color.startFade(color.White, color.originalPalette, 500)
        color.pauseUntilFadeDone()
    }
    if ((John.tileKindAt(TileDirection.Center, assets.tile`myTile60`) || John.tileKindAt(TileDirection.Center, assets.tile`myTile61`)) && (controller.B.isPressed() && Keys == 2)) {
        game.showLongText("YOU TRIED JIGGLING THE HANDLE", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.White, 500)
        color.pauseUntilFadeDone()
        MOMDADSROOM()
        Dad = sprites.create(img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 2 2 2 2 b f 4 e 
            4 d f 2 2 2 2 2 2 f d 4 
            4 4 f 1 1 1 1 1 1 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `, SpriteKind.Mark)
        tiles.placeOnTile(John, tiles.getTileLocation(1, 11))
        tiles.placeOnTile(Dad, tiles.getTileLocation(13, 14))
        animation.runImageAnimation(
        Dad,
        [img`
            . 2 . . . . . . . . 2 . 
            2 . 2 . . . . . . 2 . 2 
            . . 2 . . . . . . . . 2 
            . 2 . . . . . . . . 2 . 
            . . . . f f f f . . . . 
            . 2 f f e e e e f f 2 . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b f f e f . 
            . f f e 4 4 f 4 4 f f . 
            e 4 f b 1 1 f 4 4 f . . 
            4 d f 1 1 1 1 f 4 f . . 
            4 4 f 6 6 6 6 6 6 f . . 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . 2 . . . . . . . . 2 . 
            2 . 2 . . . . . . 2 . 2 
            . . 2 . . . . . . . . 2 
            . 2 . . . . . . . . 2 . 
            . . . . f f f f . . . . 
            . 2 f f e e e e f f 2 . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b f f e f . 
            . f f e 4 4 f 4 4 f f . 
            e 4 f b 1 1 f 4 4 f . . 
            4 d f 1 1 1 1 f 4 f . . 
            4 4 f 6 6 6 6 6 6 f . . 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `],
        500,
        true
        )
        color.startFade(color.White, color.originalPalette, 500)
        color.pauseUntilFadeDone()
    }
    if (John.tileKindAt(TileDirection.Center, assets.tile`myTile118`) && (controller.B.isPressed() && CORRECTGUESSES == 0)) {
        game.showLongText("YOU TRIED PULLING ON THE DOOR", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.Black, 500)
        color.pauseUntilFadeDone()
        CORRECTGUESSES += 1
        Guessing_Game()
    }
    if ((John.tileKindAt(TileDirection.Center, assets.tile`myTile122`) || (John.tileKindAt(TileDirection.Center, assets.tile`myTile121`) || John.tileKindAt(TileDirection.Center, assets.tile`myTile120`))) && (controller.B.isPressed() && CORRECTGUESSES == 0)) {
        game.showLongText("YOU TRIED PULLING ON THE DOOR", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.Black, 500)
        color.pauseUntilFadeDone()
        INCORRECT_ANIMATION()
    }
    if (John.tileKindAt(TileDirection.Center, assets.tile`myTile122`) && (controller.B.isPressed() && CORRECTGUESSES == 1)) {
        game.showLongText("YOU TRIED PULLING ON THE DOOR", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.Black, 500)
        color.pauseUntilFadeDone()
        CORRECTGUESSES += 1
        Guessing_Game()
    }
    if ((John.tileKindAt(TileDirection.Center, assets.tile`myTile118`) || (John.tileKindAt(TileDirection.Center, assets.tile`myTile121`) || John.tileKindAt(TileDirection.Center, assets.tile`myTile120`))) && (controller.B.isPressed() && CORRECTGUESSES == 1)) {
        game.showLongText("YOU TRIED PULLING ON THE DOOR", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.Black, 500)
        color.pauseUntilFadeDone()
        INCORRECT_ANIMATION()
    }
    if (John.tileKindAt(TileDirection.Center, assets.tile`myTile120`) && (controller.B.isPressed() && CORRECTGUESSES == 2)) {
        game.showLongText("YOU TRIED PULLING ON THE DOOR", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.Black, 500)
        color.pauseUntilFadeDone()
        CORRECTGUESSES += 1
        Guessing_Game()
    }
    if ((John.tileKindAt(TileDirection.Center, assets.tile`myTile118`) || (John.tileKindAt(TileDirection.Center, assets.tile`myTile121`) || John.tileKindAt(TileDirection.Center, assets.tile`myTile122`))) && (controller.B.isPressed() && CORRECTGUESSES == 2)) {
        game.showLongText("YOU TRIED PULLING ON THE DOOR", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.Black, 500)
        color.pauseUntilFadeDone()
        INCORRECT_ANIMATION()
    }
    if ((John.tileKindAt(TileDirection.Center, assets.tile`myTile118`) || (John.tileKindAt(TileDirection.Center, assets.tile`myTile120`) || John.tileKindAt(TileDirection.Center, assets.tile`myTile122`))) && (controller.B.isPressed() && CORRECTGUESSES == 3)) {
        game.showLongText("YOU TRIED PULLING ON THE DOOR", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.Black, 500)
        color.pauseUntilFadeDone()
        INCORRECT_ANIMATION()
    }
    if (John.tileKindAt(TileDirection.Center, assets.tile`myTile121`) && (controller.B.isPressed() && CORRECTGUESSES == 3)) {
        game.showLongText("YOU TRIED PULLING ON THE DOOR", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.Black, 500)
        color.pauseUntilFadeDone()
        music.stopAllSounds()
        tiles.setCurrentTilemap(tilemap`level38`)
        tiles.placeOnTile(John, tiles.getTileLocation(7, 14))
        camera = sprites.create(img`
            ..................
            ..fcfcf...fcfcf...
            .fcfcfcf.fcfcfcf..
            .cfbbbfcfcfbbbfc..
            .fcbdbcfffcbdbcf..
            .ffbbbffcffbbbff..
            .fcfcfcfcfcfcfcf..
            ..fcfcffcffcfcf...
            .ffffffcccffff....
            .fccccccccccf..ff.
            .fcfffffffccf.fcf.
            .fcfcbcfbfccffccf.
            .fcfbcbfbfcccccbf.
            .fcfffffffcccccbf.
            .fccccccccccffccf.
            .fcccccccccf..fcf.
            ..fffffffff....ff.
            ..................
            `, SpriteKind.Camera)
        camera.z = -1
        tiles.placeOnTile(camera, tiles.getTileLocation(7, 4))
        color.startFade(color.Black, color.originalPalette, 500)
        color.pauseUntilFadeDone()
        music.play(music.createSong(hex`0082000408080106001c00010a006400f401640000040000000000000000000000000000000002c00000000800012208001000012710001800012218002000011b20002800012228003000012730004000012240004800012248005000012750005800012258006000012760006800012a6c007000012970007400012774007800012578007c0001247c008000012480008800012288009000012790009800012298009c00011e9c00a0000120a000a8000122a800b0000127b000c0000122c000c8000127cc00d0000124d000d8000122d800e0000120e000e800011ee800f000011df000f800011b`), music.PlaybackMode.LoopingInBackground)
    }
    if (John.tileKindAt(TileDirection.Center, sprites.dungeon.stairWest) && (controller.B.isPressed() && Keys == 3)) {
        game.showLongText("YOU TRIED WALKING NORMALLY", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.White, 500)
        color.pauseUntilFadeDone()
        Downstairs()
        MOM = sprites.create(img`
            . . . . . f f f f . . . . . 
            . . . f f e e e e f f . . . 
            . . f e e e e e e e e f . . 
            . f e e e e e e e e e e f . 
            . f e e e d b b d e e e f . 
            f e e e b 4 4 4 4 b e e e f 
            f e e c c 4 4 4 4 c c e e f 
            f b b f b f 4 4 f b f b b f 
            f b b 4 1 f d d f 1 4 b b f 
            . f b f d d d d d d f b f . 
            . f e f e 4 4 4 4 e f e f . 
            . e 4 f 6 9 9 9 9 6 f 4 e . 
            . 4 d c 9 9 9 9 9 9 c d 4 . 
            . 4 f b 3 b 3 b 3 b b f 4 . 
            . . f f 3 b 3 b 3 3 f f . . 
            . . . . f f b b f f . . . . 
            `, SpriteKind.MOM)
        if (FREED_HARRY == 0) {
            CAGED_HARRY = sprites.create(img`
                dddddddddddddddddddd
                ffffffffffffffffffff
                fbbbbbbbbbbbbbbbbbbf
                fbdddbeeedbddeebddbf
                fbdddbeeefbdfeebedbf
                fbddebeeeebfeeebeebf
                fbddebeff1b1effbeebf
                fbddfbff11bfeefbefbf
                fbdddbf111bfeeebfdbf
                fbdddbf1f1b1efebddbf
                fbffdbf111be1eebddbf
                fbf1fbf611bf11ebddbf
                fbf11bee66b666fbddbf
                fbdf1be111b11efbddbf
                fbddfb11e1be11fbddbf
                fbdddb1ff1bff1fbddbf
                fbdddbfddfbddffbddbf
                fbbbbbbbbbbbbbbbbbbf
                ffffffffffffffffffff
                fddddddddddddddddddf
                `, SpriteKind.CAGEDHARRY)
        }
        CHRISTMAS_TREE = sprites.create(img`
            ........................
            ...........66...........
            ..........6776..........
            ..........6776..........
            .........877778.........
            ........86777768........
            .......6777777776.......
            ......677677776776......
            ......866777777668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....86868868868668.....
            ....866888668888868.....
            ....8688886888888888....
            ....8886688888866888....
            ....8676888868886768....
            ...87778868678688776....
            ..8777767767787767778...
            .877767777777677776778..
            .8866777777777777776778.
            .8667776776767776777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888688888
            8668868866888866888868..
            88886686688888868688668.
            .8688888888888888668868.
            .8878888868868878868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `, SpriteKind.CHRISTMASTREE)
        animation.runImageAnimation(
        CHRISTMAS_TREE,
        [img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ...........55...........
            ...........55...........
            ..........6776..........
            ..........6776..........
            .........877778.........
            ........86777768........
            .......6727777276.......
            ......677627726776......
            ......866777777668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....86868868868668.....
            ....866188668888868.....
            ....8688886881881888....
            ....8886688888866888....
            ....8676881868886768....
            ...87778868678688776....
            ..8777767767787767778...
            .877267777777677776278..
            .8866772777277727776778.
            .8667776776767776777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888688888
            8668868866888866888168..
            88886686618888868688668.
            .8681888888888188668868.
            .8878888868868878868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........5..5..........
            ...........55...........
            ...........55...........
            ..........5775..........
            ..........6776..........
            .........877778.........
            ........86777768........
            .......6727777276.......
            ......677627726776......
            ......866777777668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....85858868868668.....
            ....866188668585858.....
            ....8658586851581888....
            ....8886658585856588....
            ....8676881868886768....
            ...87778858578688776....
            ..8777767767787767778...
            .877267777777677776278..
            .8866772777277727776778.
            .8667776776767776777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888658888
            8668868865888866885158..
            88885686515888568685668.
            .8651588858885158668868.
            .8875888868868578868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `,img`
            ........................
            ........................
            ........................
            .........5....5.........
            ..........5555..........
            ..........5555..........
            ..........5555..........
            ..........5555..........
            .........567765.........
            .........877778.........
            ........86777768........
            .......6727227276.......
            ......677627726776......
            ......866272272668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....86868868868668.....
            ....866188668888868.....
            ....8688886881881888....
            ....8886688888866888....
            ....8676881868886768....
            ...87778868678688776....
            ..8727767767787767728...
            .872227277727672772228..
            .8862722272227222772778.
            .8667772776267726777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888688888
            8668868866888866888168..
            88886686618888868688668.
            .8681888888888188668868.
            .8878888868868878868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `,img`
            ........................
            .......5...55...5.......
            ........5......5........
            .........5.55.5.........
            ..........5555..........
            .....5.5.555555.5.5.....
            .....5.5.555555.5.5.....
            ..........5555..........
            .........567765.........
            ........58777785........
            .......5867777685.......
            .......6727227276.......
            ......677627726776......
            ......866272272668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....85858868868668.....
            ....866188668585858.....
            ....8658586851581888....
            ....8886658585856588....
            ....8676881868886768....
            ...87778858578688776....
            ..8272767767787767728...
            .877262727727672772228..
            .8826272772227222772778.
            .8667726276267726777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888658888
            8668868865888866885158..
            88885686515888568685668.
            .8651588858885158668868.
            .8875888868868578868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `,img`
            ........................
            ........................
            ........................
            .........5....5.........
            ..........5555..........
            ..........5555..........
            ..........5555..........
            ..........5555..........
            .........567765.........
            .........877778.........
            ........86777768........
            .......6727227276.......
            ......677627726776......
            ......866272272668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....85858868868668.....
            ....866188668585858.....
            ....8658586851581888....
            ....8886658585856588....
            ....8676881868886768....
            ...87778858578688776....
            ..8272767767787767728...
            .877262727727672772228..
            .8826272772227222772778.
            .8667726276267726777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888658888
            8668868865888866885158..
            88885686515888568685668.
            .8651588858885158668868.
            .8875888868868578868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........5..5..........
            ...........55...........
            ...........55...........
            ..........5775..........
            ..........6776..........
            .........877778.........
            ........86777768........
            .......6727777276.......
            ......677627726776......
            ......866777777668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....85858868868668.....
            ....866188668585858.....
            ....8658586851581888....
            ....8886658585856588....
            ....8676881868886768....
            ...87778858578688776....
            ..8777767767787767778...
            .877267777777677776278..
            .8866772777277727776778.
            .8667776776767776777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888658888
            8668868865888866885158..
            88885686515888568685668.
            .8651588858885158668868.
            .8875888868868578868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `],
        200,
        true
        )
        tiles.placeOnTile(John, tiles.getTileLocation(7, 17))
        tiles.placeOnTile(HARRY, tiles.getTileLocation(7, 17))
        tiles.placeOnTile(MOM, tiles.getTileLocation(10, 10))
        tiles.placeOnTile(CAGED_HARRY, tiles.getTileLocation(12, 6))
        tiles.placeOnTile(CHRISTMAS_TREE, tiles.getTileLocation(14, 2))
        color.startFade(color.White, color.originalPalette, 500)
        color.pauseUntilFadeDone()
        CAGED_HARRY.sayText("BARK! BARK!")
    }
    if (John.tileKindAt(TileDirection.Center, sprites.dungeon.stairSouth) && (controller.B.isPressed() && Keys >= 3)) {
        game.showLongText("YOU TRIED WALKING NORMALLY", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.White, 500)
        color.pauseUntilFadeDone()
        HALLWAY()
        tiles.placeOnTile(John, tiles.getTileLocation(18, 5))
        tiles.placeOnTile(HARRY, tiles.getTileLocation(18, 5))
        sprites.destroy(CAGED_HARRY)
        sprites.destroy(MOM)
        sprites.destroy(CHRISTMAS_TREE)
        color.startFade(color.White, color.originalPalette, 500)
        color.pauseUntilFadeDone()
    }
    if (John.tileKindAt(TileDirection.Center, sprites.dungeon.stairWest) && (controller.B.isPressed() && Keys > 3)) {
        game.showLongText("YOU TRIED WALKING NORMALLY", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.White, 500)
        color.pauseUntilFadeDone()
        Downstairs()
        if (FREED_HARRY == 0) {
            CAGED_HARRY = sprites.create(img`
                dddddddddddddddddddd
                ffffffffffffffffffff
                fbbbbbbbbbbbbbbbbbbf
                fbdddbeeedbddeebddbf
                fbdddbeeefbdfeebedbf
                fbddebeeeebfeeebeebf
                fbddebeff1b1effbeebf
                fbddfbff11bfeefbefbf
                fbdddbf111bfeeebfdbf
                fbdddbf1f1b1efebddbf
                fbffdbf111be1eebddbf
                fbf1fbf611bf11ebddbf
                fbf11bee66b666fbddbf
                fbdf1be111b11efbddbf
                fbddfb11e1be11fbddbf
                fbdddb1ff1bff1fbddbf
                fbdddbfddfbddffbddbf
                fbbbbbbbbbbbbbbbbbbf
                ffffffffffffffffffff
                fddddddddddddddddddf
                `, SpriteKind.CAGEDHARRY)
        }
        CHRISTMAS_TREE = sprites.create(img`
            ........................
            ...........66...........
            ..........6776..........
            ..........6776..........
            .........877778.........
            ........86777768........
            .......6777777776.......
            ......677677776776......
            ......866777777668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....86868868868668.....
            ....866888668888868.....
            ....8688886888888888....
            ....8886688888866888....
            ....8676888868886768....
            ...87778868678688776....
            ..8777767767787767778...
            .877767777777677776778..
            .8866777777777777776778.
            .8667776776767776777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888688888
            8668868866888866888868..
            88886686688888868688668.
            .8688888888888888668868.
            .8878888868868878868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `, SpriteKind.CHRISTMASTREE)
        animation.runImageAnimation(
        CHRISTMAS_TREE,
        [img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ...........55...........
            ...........55...........
            ..........6776..........
            ..........6776..........
            .........877778.........
            ........86777768........
            .......6727777276.......
            ......677627726776......
            ......866777777668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....86868868868668.....
            ....866188668888868.....
            ....8688886881881888....
            ....8886688888866888....
            ....8676881868886768....
            ...87778868678688776....
            ..8777767767787767778...
            .877267777777677776278..
            .8866772777277727776778.
            .8667776776767776777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888688888
            8668868866888866888168..
            88886686618888868688668.
            .8681888888888188668868.
            .8878888868868878868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........5..5..........
            ...........55...........
            ...........55...........
            ..........5775..........
            ..........6776..........
            .........877778.........
            ........86777768........
            .......6727777276.......
            ......677627726776......
            ......866777777668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....85858868868668.....
            ....866188668585858.....
            ....8658586851581888....
            ....8886658585856588....
            ....8676881868886768....
            ...87778858578688776....
            ..8777767767787767778...
            .877267777777677776278..
            .8866772777277727776778.
            .8667776776767776777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888658888
            8668868865888866885158..
            88885686515888568685668.
            .8651588858885158668868.
            .8875888868868578868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `,img`
            ........................
            ........................
            ........................
            .........5....5.........
            ..........5555..........
            ..........5555..........
            ..........5555..........
            ..........5555..........
            .........567765.........
            .........877778.........
            ........86777768........
            .......6727227276.......
            ......677627726776......
            ......866272272668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....86868868868668.....
            ....866188668888868.....
            ....8688886881881888....
            ....8886688888866888....
            ....8676881868886768....
            ...87778868678688776....
            ..8727767767787767728...
            .872227277727672772228..
            .8862722272227222772778.
            .8667772776267726777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888688888
            8668868866888866888168..
            88886686618888868688668.
            .8681888888888188668868.
            .8878888868868878868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `,img`
            ........................
            .......5...55...5.......
            ........5......5........
            .........5.55.5.........
            ..........5555..........
            .....5.5.555555.5.5.....
            .....5.5.555555.5.5.....
            ..........5555..........
            .........567765.........
            ........58777785........
            .......5867777685.......
            .......6727227276.......
            ......677627726776......
            ......866272272668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....85858868868668.....
            ....866188668585858.....
            ....8658586851581888....
            ....8886658585856588....
            ....8676881868886768....
            ...87778858578688776....
            ..8272767767787767728...
            .877262727727672772228..
            .8826272772227222772778.
            .8667726276267726777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888658888
            8668868865888866885158..
            88885686515888568685668.
            .8651588858885158668868.
            .8875888868868578868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `,img`
            ........................
            ........................
            ........................
            .........5....5.........
            ..........5555..........
            ..........5555..........
            ..........5555..........
            ..........5555..........
            .........567765.........
            .........877778.........
            ........86777768........
            .......6727227276.......
            ......677627726776......
            ......866272272668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....85858868868668.....
            ....866188668585858.....
            ....8658586851581888....
            ....8886658585856588....
            ....8676881868886768....
            ...87778858578688776....
            ..8272767767787767728...
            .877262727727672772228..
            .8826272772227222772778.
            .8667726276267726777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888658888
            8668868865888866885158..
            88885686515888568685668.
            .8651588858885158668868.
            .8875888868868578868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........5..5..........
            ...........55...........
            ...........55...........
            ..........5775..........
            ..........6776..........
            .........877778.........
            ........86777768........
            .......6727777276.......
            ......677627726776......
            ......866777777668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....85858868868668.....
            ....866188668585858.....
            ....8658586851581888....
            ....8886658585856588....
            ....8676881868886768....
            ...87778858578688776....
            ..8777767767787767778...
            .877267777777677776278..
            .8866772777277727776778.
            .8667776776767776777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888658888
            8668868865888866885158..
            88885686515888568685668.
            .8651588858885158668868.
            .8875888868868578868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            `],
        200,
        true
        )
        tiles.placeOnTile(John, tiles.getTileLocation(7, 17))
        tiles.placeOnTile(HARRY, tiles.getTileLocation(7, 17))
        tiles.placeOnTile(CAGED_HARRY, tiles.getTileLocation(12, 6))
        tiles.placeOnTile(CHRISTMAS_TREE, tiles.getTileLocation(14, 2))
        color.startFade(color.White, color.originalPalette, 500)
        color.pauseUntilFadeDone()
        CAGED_HARRY.sayText("BARK! BARK!")
    }
    if (John.tileKindAt(TileDirection.Center, sprites.dungeon.doorOpenWest) && (controller.B.isPressed() && Keys > 3)) {
        game.showLongText("YOU QUIETLY OPENED THE DOOR", DialogLayout.Bottom)
        color.startFade(color.originalPalette, color.White, 500)
        color.pauseUntilFadeDone()
    }
})
game.onUpdateInterval(randint(2000, 3000), function () {
    if (FOODSPAWN == 1) {
        EGGS = sprites.create(assets.image`EGGS`, SpriteKind.FOOD1)
        EGGS.setPosition(randint(0, scene.screenWidth()), 0)
        EGGS.ay = randint(20, 30)
        EGGS.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
