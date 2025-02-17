import wixData from 'wix-data';

$w.onReady(() => {

    $w("#NewButton").onClick(() => {

        let filter = $w("#NewButton").label

        $w("#dataset5").setFilter(wixData.filter()
            .eq('category1', filter)

        )
    })

    $w("#FeatureButton").onClick(() => {

        let filter = $w("#FeatureButton").label

        $w("#dataset5").setFilter(wixData.filter()
            .eq('category1', filter)

        )
    })

});