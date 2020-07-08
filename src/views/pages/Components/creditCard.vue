<template>
    <div>
        <vx-card class="mb-2 bg-primary-gradient greet-user">
            <div class="flex justify-between flex-wrap p-1">
                <span class="card-span">{{ card.card_type }}</span>
                <span class="card-span">Delete</span>
            </div>

            <div class="flex justify-around p-2">
                <svg width="53" height="30" viewBox="0 0 53 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#E65252"/>
                    <circle cx="38" cy="15" r="15" fill="#E9BA15"/>
                </svg>
                <p>XXXX - XXXX - XXXX - {{ card.last4 }}</p>
            </div>
            <div class="text-left card-span p-3 pl-5 ml-5">
                <p>MasterCard - Expires {{ card.exp_month }}/{{ card.exp_year }}</p>
                <p>Billed on the first of every month</p>
                <p>Next billing due July 01,2019</p>
            </div>

        </vx-card>
    </div>
</template>

<script>
export default {
    props:['card']
}
</script>