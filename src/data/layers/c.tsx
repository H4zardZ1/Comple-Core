/**
 * @module
 * @hidden
 */
import { main } from "data/projEntry";
import { createCumulativeConversion } from "features/conversion";
import { jsx } from "features/feature";
import { createUpgrade } from "features/upgrades/upgrade"
import { createCostRequirement } from "game/requirements"
import { createHotkey } from "features/hotkey";
import { createReset } from "features/reset";
import MainDisplay from "features/resources/MainDisplay.vue";
import { createResource } from "features/resources/resource";
import { addTooltip } from "features/tooltips/tooltip";
import { createResourceTooltip } from "features/trees/tree";
import { BaseLayer, createLayer } from "game/layers";
import type { DecimalSource } from "util/bignum";
import { render } from "util/vue";
import { createLayerTreeNode, createResetButton } from "../common";
import { noPersist } from "game/persistence";

const id = "c";
const layer = createLayer(id, function (this: BaseLayer) {
    const name = "Core"
    const unlockMainStuff = createUpgrade(() => ({
        requirements: createCostRequirement(() => ({
            resource: noPersist(main.points),
            cost: 1
    })),
        display: {
            description: "Start doing stuff."
        }
    }))



    
    return {
        name,
        unlockMainStuff,
        display: jsx(() => (
            <>
                <MainDisplay resource={main.points} />
                {render(unlockMainStuff)}
            </>
        ))
    }
})

export default layer