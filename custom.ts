
/**
* Use this file to define custom functions and blocks.
* Read more at https://minecraft.makecode.com/blocks/custom
*/



/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace vcode {
    /**
     * Fill with 4 blocks in a row
     * @param startPosition the position to place the block
     */
    //% block="fill with 4 blocks"
    export function fillWith4Blocks(startPosition: Position): void {
        blocks.fill(
            IRON_BLOCK,
            startPosition,
            positions.add(
                startPosition,
                pos(3, 0, 0)
            ),
            FillOperation.Replace
        );
    }
}