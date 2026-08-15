export function renderUI(){
    app.innerHTML = `
    <div class="mb-3">
            <h2 class="font-semibold text-xl sm:text-2xl">
                Password Generator
            </h2>
        </div>

        <div class="relative mb-5">
            <input
                type="text"
                id="password"
                readonly
                class="
                    bg-primary
                    w-full
                    pl-3
                    pr-10
                    py-2
                    text-base
                    font-semibold
                    outline-none
                    border
                    border-border
                    focus:border-border
                    focus:ring-0
                "
            >

            <span
                class="
                    material-symbols-outlined
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    cursor-pointer
                    !text-base
                "
                id="copyBtn"
            >
                content_copy
            </span>
        </div>

        <div class="mb-5">

            <div class="flex items-center justify-between mb-6">
                <label
                    for="length"
                    class="text-sm font-medium"
                >
                    Password Length
                </label>

                <input
                    type="number"
                    id="length"
                    min="4"
                    max="30"
                    value="4"
                    class="
                        w-10
                        h-7
                        bg-leng
                        text-center
                        text-xs
                        rounded-sm
                        border
                        border-settingB
                        outline-none
                        focus:border-border
                        focus:ring-0
                        appearance-none
                        [&::-webkit-inner-spin-button]:appearance-none
                        [&::-webkit-outer-spin-button]:appearance-none
                    "
                >
            </div>

            <p class="text-[12px] font-semibold mb-2">
                Settings
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">

                <div class="border border-settingB px-3 py-2 flex items-center gap-2 rounded-xs">
                    <input
                        type="checkbox"
                        id="uppercase"
                        class="accent-black w-4 h-4 shrink-0"
                    >

                    <label
                        for="uppercase"
                        class="text-sm font-medium cursor-pointer"
                    >
                        Uppercase (A-Z)
                    </label>
                </div>

                <div class="border border-settingB px-3 py-2 flex items-center gap-2 rounded-xs">
                    <input
                        type="checkbox"
                        id="lowercase"
                        class="accent-black w-4 h-4 shrink-0"
                    >

                    <label
                        for="lowercase"
                        class="text-sm font-medium cursor-pointer"
                    >
                        Lowercase (a-z)
                    </label>
                </div>

                <div class="border border-settingB px-3 py-2 flex items-center gap-2 rounded-xs">
                    <input
                        type="checkbox"
                        id="numbers"
                        class="accent-black w-4 h-4 shrink-0"
                    >

                    <label
                        for="numbers"
                        class="text-sm font-medium cursor-pointer"
                    >
                        Numbers (0-9)
                    </label>
                </div>

                <div class="border border-settingB px-3 py-2 flex items-center gap-2 rounded-xs">
                    <input
                        type="checkbox"
                        id="symbols"
                        class="accent-black w-4 h-4 shrink-0"
                    >

                    <label
                        for="symbols"
                        class="text-sm font-medium cursor-pointer"
                    >
                        Symbols (!@#)
                    </label>
                </div>

            </div>
        </div>

        <button
            type="button"
            id="generateBtn"
            class="
                bg-black
                w-full
                text-white
                font-medium
                py-2
                rounded-sm
                hover:bg-neutral-900
            "
        >
            Generate Password
        </button>
        `
}