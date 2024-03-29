import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();

    const list = [
        {
            label: "Home",
            slug: "/",
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 1.25C11.2919 1.25 10.6485 1.45282 9.95055 1.79224C9.27585 2.12035 8.49642 2.60409 7.52286 3.20832L5.45628 4.4909C4.53509 5.06261 3.79744 5.5204 3.2289 5.95581C2.64015 6.40669 2.18795 6.86589 1.86131 7.46263C1.53535 8.05812 1.38857 8.69174 1.31819 9.4407C1.24999 10.1665 1.24999 11.0541 1.25 12.1672V13.7799C1.24999 15.6837 1.24998 17.1866 1.4027 18.3616C1.55937 19.567 1.88856 20.5401 2.63236 21.3094C3.37958 22.0824 4.33046 22.4277 5.50761 22.5914C6.64849 22.75 8.10556 22.75 9.94185 22.75H14.0581C15.8944 22.75 17.3515 22.75 18.4924 22.5914C19.6695 22.4277 20.6204 22.0824 21.3676 21.3094C22.1114 20.5401 22.4406 19.567 22.5973 18.3616C22.75 17.1866 22.75 15.6838 22.75 13.7799V12.1672C22.75 11.0541 22.75 10.1665 22.6818 9.4407C22.6114 8.69174 22.4646 8.05812 22.1387 7.46263C21.8121 6.86589 21.3599 6.40669 20.7711 5.95581C20.2026 5.5204 19.4649 5.06262 18.5437 4.49091L16.4771 3.20831C15.5036 2.60409 14.7241 2.12034 14.0494 1.79224C13.3515 1.45282 12.7081 1.25 12 1.25ZM8.27953 4.50412C9.29529 3.87371 10.0095 3.43153 10.6065 3.1412C11.1882 2.85833 11.6002 2.75 12 2.75C12.3998 2.75 12.8118 2.85833 13.3935 3.14119C13.9905 3.43153 14.7047 3.87371 15.7205 4.50412L17.7205 5.74537C18.6813 6.34169 19.3559 6.76135 19.8591 7.1467C20.3487 7.52164 20.6303 7.83106 20.8229 8.18285C21.0162 8.53589 21.129 8.94865 21.1884 9.58104C21.2492 10.2286 21.25 11.0458 21.25 12.2039V13.725C21.25 15.6959 21.2485 17.1012 21.1098 18.1683C20.9736 19.2163 20.717 19.8244 20.2892 20.2669C19.8649 20.7058 19.2871 20.9664 18.2858 21.1057C17.2602 21.2483 15.9075 21.25 14 21.25H10C8.09247 21.25 6.73983 21.2483 5.71422 21.1057C4.71286 20.9664 4.13514 20.7058 3.71079 20.2669C3.28301 19.8244 3.02642 19.2163 2.89019 18.1683C2.75149 17.1012 2.75 15.6959 2.75 13.725V12.2039C2.75 11.0458 2.75076 10.2286 2.81161 9.58104C2.87103 8.94865 2.98385 8.53589 3.17709 8.18285C3.36965 7.83106 3.65133 7.52164 4.14092 7.1467C4.6441 6.76135 5.31869 6.34169 6.27953 5.74537L8.27953 4.50412Z"
                    />
                </svg>
            ),
        },
        {
            label: "Explore",
            slug: "/explore",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.9451 1.25H13.0549C14.4225 1.24998 15.5248 1.24996 16.3918 1.36652C17.2919 1.48754 18.0498 1.74643 18.6517 2.34835C19.0519 2.74855 19.3004 3.2177 19.4577 3.75175C19.6692 3.75503 19.8458 3.76426 20.0084 3.79001C21.3991 4.01027 22.4898 5.10094 22.71 6.49159C22.7502 6.74548 22.7501 7.03358 22.75 7.43528C22.75 7.45653 22.75 7.4781 22.75 7.5V16.5C22.75 16.5219 22.75 16.5435 22.75 16.5647C22.7501 16.9664 22.7502 17.2545 22.71 17.5084C22.4898 18.8991 21.3991 19.9897 20.0084 20.21C19.8458 20.2357 19.6692 20.245 19.4577 20.2482C19.3004 20.7823 19.0519 21.2514 18.6517 21.6517C18.0498 22.2536 17.2919 22.5125 16.3918 22.6335C15.5248 22.75 14.4225 22.75 13.0549 22.75H10.9452C9.57756 22.75 8.47524 22.75 7.60827 22.6335C6.70816 22.5125 5.95029 22.2536 5.34837 21.6517C4.94817 21.2514 4.69961 20.7823 4.54238 20.2482C4.33086 20.245 4.15422 20.2357 3.99161 20.21C2.60096 19.9897 1.51029 18.8991 1.29004 17.5084C1.24982 17.2545 1.2499 16.9664 1.25001 16.5647C1.25002 16.5435 1.25002 16.5219 1.25002 16.5V7.5C1.25002 7.4781 1.25002 7.45652 1.25001 7.43527C1.2499 7.03357 1.24982 6.74548 1.29004 6.49159C1.51029 5.10094 2.60096 4.01027 3.99161 3.79001C4.15422 3.76426 4.33086 3.75503 4.54238 3.75175C4.69961 3.2177 4.94817 2.74855 5.34837 2.34835C5.95029 1.74643 6.70816 1.48754 7.60827 1.36652C8.47524 1.24996 9.57756 1.24998 10.9451 1.25ZM4.30193 5.26229C4.27396 5.26483 4.24942 5.26788 4.22626 5.27155C3.47745 5.39015 2.89017 5.97743 2.77157 6.72624C2.75235 6.84758 2.75002 7.00684 2.75002 7.5V16.5C2.75002 16.9932 2.75235 17.1524 2.77157 17.2738C2.89017 18.0226 3.47745 18.6099 4.22626 18.7285C4.24942 18.7321 4.27396 18.7352 4.30193 18.7377C4.24999 17.9893 4.25001 17.0995 4.25002 16.0549L4.25002 14.8166C4.25002 14.8161 4.25002 14.8156 4.25002 14.8151L4.25002 7.94512C4.25001 6.90052 4.24999 6.01069 4.30193 5.26229ZM5.75002 15.1209V16C5.75002 17.4354 5.75162 18.4365 5.85317 19.1919C5.95182 19.9257 6.13227 20.3142 6.40903 20.591C6.6858 20.8678 7.07437 21.0482 7.80814 21.1469C8.56349 21.2484 9.56461 21.25 11 21.25H13C14.4354 21.25 15.4366 21.2484 16.1919 21.1469C16.9257 21.0482 17.3143 20.8678 17.591 20.591C17.743 20.439 17.8659 20.2533 17.9622 19.9952L16.0804 18.0092C15.577 17.478 14.8816 17.4416 14.352 17.8781L14.1322 18.0591C13.216 18.8142 11.9548 18.6658 11.1952 17.7751L8.03435 14.0687C7.68431 13.6583 7.1851 13.6485 6.82776 14.0152L5.75002 15.1209ZM18.2292 18.0961L17.1692 16.9775C16.1406 15.892 14.5546 15.7673 13.398 16.7205L13.1783 16.9016C12.9228 17.1121 12.5897 17.0987 12.3365 16.8018L9.17567 13.0954C8.26393 12.0263 6.73916 11.957 5.75357 12.9682L5.75002 12.9719V8C5.75002 6.56458 5.75162 5.56347 5.85317 4.80812C5.95182 4.07435 6.13227 3.68577 6.40903 3.40901C6.6858 3.13225 7.07437 2.9518 7.80814 2.85315C8.56349 2.75159 9.56461 2.75 11 2.75H13C14.4354 2.75 15.4366 2.75159 16.1919 2.85315C16.9257 2.9518 17.3143 3.13225 17.591 3.40901C17.8678 3.68577 18.0482 4.07435 18.1469 4.80812C18.2484 5.56347 18.25 6.56458 18.25 8V16C18.25 16.8326 18.2495 17.519 18.2292 18.0961ZM19.6981 18.7377C19.7261 18.7352 19.7506 18.7321 19.7738 18.7285C20.5226 18.6099 21.1099 18.0226 21.2285 17.2738C21.2477 17.1524 21.25 16.9932 21.25 16.5V7.5C21.25 7.00684 21.2477 6.84758 21.2285 6.72624C21.1099 5.97743 20.5226 5.39015 19.7738 5.27155C19.7506 5.26788 19.7261 5.26483 19.6981 5.26229C19.7501 6.01069 19.75 6.90053 19.75 7.94513V16.0549C19.75 17.0995 19.7501 17.9893 19.6981 18.7377ZM14.5 5.75C14.0858 5.75 13.75 6.08579 13.75 6.5C13.75 6.91421 14.0858 7.25 14.5 7.25C14.9142 7.25 15.25 6.91421 15.25 6.5C15.25 6.08579 14.9142 5.75 14.5 5.75ZM12.25 6.5C12.25 5.25736 13.2574 4.25 14.5 4.25C15.7427 4.25 16.75 5.25736 16.75 6.5C16.75 7.74264 15.7427 8.75 14.5 8.75C13.2574 8.75 12.25 7.74264 12.25 6.5Z"
                    />
                </svg>
            ),
        },
        {
            label: "People",
            slug: "/people",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 1.25C6.37665 1.25 4.25 3.37665 4.25 6C4.25 8.62335 6.37665 10.75 9 10.75C11.6234 10.75 13.75 8.62335 13.75 6C13.75 3.37665 11.6234 1.25 9 1.25ZM5.75 6C5.75 4.20507 7.20507 2.75 9 2.75C10.7949 2.75 12.25 4.20507 12.25 6C12.25 7.79493 10.7949 9.25 9 9.25C7.20507 9.25 5.75 7.79493 5.75 6Z"
                    />
                    <path d="M15 2.25C14.5858 2.25 14.25 2.58579 14.25 3C14.25 3.41421 14.5858 3.75 15 3.75C16.2426 3.75 17.25 4.75736 17.25 6C17.25 7.24264 16.2426 8.25 15 8.25C14.5858 8.25 14.25 8.58579 14.25 9C14.25 9.41421 14.5858 9.75 15 9.75C17.0711 9.75 18.75 8.07107 18.75 6C18.75 3.92893 17.0711 2.25 15 2.25Z" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.67815 13.5204C5.07752 12.7208 6.96067 12.25 9 12.25C11.0393 12.25 12.9225 12.7208 14.3219 13.5204C15.7 14.3079 16.75 15.5101 16.75 17C16.75 18.4899 15.7 19.6921 14.3219 20.4796C12.9225 21.2792 11.0393 21.75 9 21.75C6.96067 21.75 5.07752 21.2792 3.67815 20.4796C2.3 19.6921 1.25 18.4899 1.25 17C1.25 15.5101 2.3 14.3079 3.67815 13.5204ZM4.42236 14.8228C3.26701 15.483 2.75 16.2807 2.75 17C2.75 17.7193 3.26701 18.517 4.42236 19.1772C5.55649 19.8253 7.17334 20.25 9 20.25C10.8267 20.25 12.4435 19.8253 13.5776 19.1772C14.733 18.517 15.25 17.7193 15.25 17C15.25 16.2807 14.733 15.483 13.5776 14.8228C12.4435 14.1747 10.8267 13.75 9 13.75C7.17334 13.75 5.55649 14.1747 4.42236 14.8228Z"
                    />
                    <path d="M18.1607 13.2674C17.7561 13.1787 17.3561 13.4347 17.2674 13.8393C17.1787 14.2439 17.4347 14.6439 17.8393 14.7326C18.6317 14.9064 19.2649 15.2048 19.6829 15.5468C20.1014 15.8892 20.25 16.2237 20.25 16.5C20.25 16.7507 20.1294 17.045 19.7969 17.3539C19.462 17.665 18.9475 17.9524 18.2838 18.1523C17.8871 18.2717 17.6624 18.69 17.7818 19.0867C17.9013 19.4833 18.3196 19.708 18.7162 19.5886C19.5388 19.3409 20.2743 18.9578 20.8178 18.4529C21.3637 17.9457 21.75 17.2786 21.75 16.5C21.75 15.6352 21.2758 14.912 20.6328 14.3859C19.9893 13.8593 19.1225 13.4783 18.1607 13.2674Z" />
                </svg>
            ),
        },
        {
            label: "saved",
            slug: "/saved",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M9 5.25C8.58579 5.25 8.25 5.58579 8.25 6C8.25 6.41421 8.58579 6.75 9 6.75H15C15.4142 6.75 15.75 6.41421 15.75 6C15.75 5.58579 15.4142 5.25 15 5.25H9Z" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9425 1.25C9.86994 1.24999 8.23716 1.24997 6.96128 1.42337C5.65122 1.60141 4.60609 1.97468 3.78484 2.80484C2.96469 3.63387 2.59692 4.68702 2.4213 6.00741C2.24998 7.29551 2.24999 8.94462 2.25 11.0411V16.139C2.24999 17.6466 2.24998 18.8402 2.34601 19.7388C2.44091 20.6269 2.64447 21.428 3.22584 21.9638C3.69226 22.3937 4.28211 22.6646 4.91165 22.7367C5.69912 22.8268 6.43439 22.4508 7.15868 21.9377C7.89163 21.4185 8.78075 20.6321 9.90254 19.6399L9.93905 19.6076C10.4591 19.1476 10.8112 18.8372 11.105 18.6224C11.3889 18.4148 11.5623 18.3397 11.7084 18.3103C11.9009 18.2715 12.0991 18.2715 12.2916 18.3103C12.4377 18.3397 12.6111 18.4148 12.895 18.6224C13.1888 18.8372 13.5409 19.1476 14.061 19.6076L14.0975 19.64C15.2193 20.6321 16.1084 21.4186 16.8413 21.9377C17.5656 22.4508 18.3009 22.8268 19.0883 22.7367C19.7179 22.6646 20.3077 22.3937 20.7742 21.9638C21.3555 21.428 21.5591 20.6269 21.654 19.7388C21.75 18.8402 21.75 17.6466 21.75 16.139V11.041C21.75 8.94462 21.75 7.2955 21.5787 6.00741C21.4031 4.68702 21.0353 3.63387 20.2152 2.80484C19.3939 1.97468 18.3488 1.60141 17.0387 1.42337C15.7628 1.24997 14.1301 1.24999 12.0575 1.25H11.9425ZM4.8512 3.85977C5.34797 3.35762 6.02251 3.06474 7.16328 2.90971C8.32645 2.75163 9.85725 2.75 12 2.75C14.1427 2.75 15.6736 2.75163 16.8367 2.90971C17.9775 3.06474 18.652 3.35762 19.1488 3.85977C19.6467 4.36303 19.9379 5.04819 20.0918 6.20518C20.2484 7.38292 20.25 8.93223 20.25 11.0975V16.0909C20.25 17.6572 20.249 18.7702 20.1625 19.5794C20.0739 20.4088 19.9104 20.72 19.7576 20.8608C19.5238 21.0763 19.2298 21.2107 18.9178 21.2464C18.7182 21.2692 18.3835 21.192 17.7083 20.7137C17.0497 20.2472 16.2211 19.5157 15.0547 18.484L15.0286 18.4609C14.5413 18.0299 14.1372 17.6725 13.7804 17.4116C13.4074 17.1388 13.0312 16.9292 12.5878 16.8398C12.1998 16.7617 11.8002 16.7617 11.4122 16.8398C10.9688 16.9292 10.5926 17.1388 10.2196 17.4116C9.86283 17.6725 9.45871 18.0299 8.97146 18.4609L8.94527 18.484C7.77887 19.5157 6.95026 20.2472 6.29165 20.7137C5.61646 21.192 5.28182 21.2692 5.08218 21.2464C4.77019 21.2107 4.47617 21.0763 4.24237 20.8608C4.08963 20.72 3.92614 20.4088 3.83752 19.5794C3.75104 18.7702 3.75 17.6572 3.75 16.0909V11.0975C3.75 8.93223 3.75156 7.38292 3.90821 6.20518C4.06209 5.04819 4.35333 4.36303 4.8512 3.85977Z"
                    />
                </svg>
            ),
        },
        {
            label: "Reels",
            slug: "/reels",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.89922 6.81554 2.87624 7.02735 2.85681 7.25H6.58829L9.44439 2.76185C8.31691 2.77915 7.39205 2.82171 6.61358 2.92637ZM11.2072 2.75032C11.1886 2.80268 11.1638 2.85379 11.1327 2.90266L8.36626 7.25H13.0883L15.9189 2.80191C14.8557 2.7507 13.5747 2.75 12 2.75C11.727 2.75 11.4629 2.75002 11.2072 2.75032ZM17.5982 2.95698L14.8663 7.25H21.1432C21.1238 7.02735 21.1008 6.81554 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4677 3.45731 18.7512 3.13594 17.5982 2.95698ZM21.2233 8.75H13.5112C13.5033 8.75013 13.4953 8.75013 13.4874 8.75H7.01122C7.00327 8.75013 6.99532 8.75013 6.98737 8.75H2.77672C2.75045 9.67173 2.75 10.7422 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62177 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 10.7422 21.2496 9.67173 21.2233 8.75ZM13.3682 11.9212L13.4699 11.9868C14.0897 12.3866 14.6263 12.7328 15.0004 13.0636C15.3983 13.4156 15.75 13.8686 15.75 14.5C15.75 15.1314 15.3983 15.5844 15.0004 15.9364C14.6263 16.2671 14.0897 16.6133 13.4699 17.0132L13.3682 17.0788C12.7421 17.4828 12.1979 17.834 11.7459 18.0347C11.2756 18.2435 10.673 18.394 10.0982 18.0289C9.55356 17.6828 9.38842 17.0922 9.31912 16.5722C9.24994 16.053 9.24996 15.3674 9.25 14.5549V14.4451C9.24996 13.6326 9.24994 12.947 9.31912 12.4278C9.38842 11.9078 9.55356 11.3172 10.0982 10.9711C10.673 10.606 11.2756 10.7565 11.7459 10.9653C12.1979 11.166 12.7421 11.5172 13.3682 11.9212ZM10.8579 12.2517C10.8573 12.2509 10.862 12.2496 10.8737 12.2504C10.8644 12.2529 10.8585 12.2525 10.8579 12.2517ZM10.8971 12.2532C10.9373 12.2601 11.0119 12.2806 11.1372 12.3362C11.4688 12.4834 11.9134 12.7677 12.6073 13.2154C13.2907 13.6564 13.7285 13.9413 14.0066 14.1873C14.2627 14.4137 14.251 14.4932 14.25 14.4996C14.251 14.5061 14.2627 14.5863 14.0066 14.8127C13.7285 15.0587 13.2907 15.3436 12.6073 15.7846C11.9134 16.2323 11.4688 16.5166 11.1372 16.6638C11.0119 16.7194 10.9373 16.7399 10.8971 16.7468C10.8749 16.704 10.8362 16.6006 10.806 16.3741C10.7516 15.9662 10.75 15.3821 10.75 14.5C10.75 13.6179 10.7516 13.0338 10.806 12.6259C10.8362 12.3994 10.8749 12.296 10.8971 12.2532ZM10.8579 16.7483C10.8585 16.7475 10.8644 16.7472 10.8737 16.7496C10.862 16.7504 10.8573 16.7491 10.8579 16.7483ZM10.9101 16.7682C10.9135 16.7711 10.915 16.7731 10.9149 16.7733C10.9148 16.7736 10.9131 16.7722 10.9101 16.7682ZM10.9101 12.2318C10.9131 12.2278 10.9148 12.2264 10.9149 12.2267C10.915 12.2269 10.9135 12.2289 10.9101 12.2318Z"
                    />
                </svg>
            ),
        },
        {
            label: "Chats",
            slug: "/messanger",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 13.4811 3.09753 14.8788 3.7148 16.1181C3.96254 16.6155 4.05794 17.2103 3.90163 17.7945L3.30602 20.0205C3.19663 20.4293 3.57066 20.8034 3.97949 20.694L6.20553 20.0984C6.78973 19.9421 7.38451 20.0375 7.88191 20.2852C9.12121 20.9025 10.5189 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C10.2817 22.75 8.65552 22.3463 7.21315 21.6279C6.99791 21.5207 6.77814 21.4979 6.59324 21.5474L4.3672 22.143C2.84337 22.5507 1.44927 21.1566 1.857 19.6328L2.4526 17.4068C2.50208 17.2219 2.47933 17.0021 2.37213 16.7869C1.65371 15.3445 1.25 13.7183 1.25 12ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5ZM7.25 14C7.25 13.5858 7.58579 13.25 8 13.25H13.5C13.9142 13.25 14.25 13.5858 14.25 14C14.25 14.4142 13.9142 14.75 13.5 14.75H8C7.58579 14.75 7.25 14.4142 7.25 14Z"
                    />
                </svg>
            ),
        },
        {
            label: "Create Post",
            slug: "/new",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.5 1.25C18.9142 1.25 19.25 1.58579 19.25 2V4.75H22C22.4142 4.75 22.75 5.08579 22.75 5.5C22.75 5.91421 22.4142 6.25 22 6.25H19.25V9C19.25 9.41421 18.9142 9.75 18.5 9.75C18.0858 9.75 17.75 9.41421 17.75 9V6.25H15C14.5858 6.25 14.25 5.91421 14.25 5.5C14.25 5.08579 14.5858 4.75 15 4.75H17.75V2C17.75 1.58579 18.0858 1.25 18.5 1.25Z"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 1.25L11.9426 1.25C9.63423 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63423 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V12C22.75 11.5858 22.4142 11.25 22 11.25C21.5858 11.25 21.25 11.5858 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C21.0667 17.4377 21.0596 17.4882 21.0522 17.5378L18.2782 15.0412C16.9788 13.8718 15.0437 13.7553 13.6134 14.7605L13.3152 14.9701C12.8182 15.3193 12.1421 15.2608 11.7125 14.8313L7.42282 10.5415C6.28741 9.40612 4.46613 9.34547 3.25771 10.4028L2.75098 10.8462C2.75552 9.05395 2.78124 7.69302 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C12.4142 2.75 12.75 2.41421 12.75 2C12.75 1.58579 12.4142 1.25 12 1.25ZM2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62177 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.2487 19.7617 20.4479 19.4814 20.6096 19.1404C20.5707 19.1166 20.5334 19.089 20.4983 19.0574L17.2747 16.1562C16.4951 15.4545 15.334 15.3846 14.4758 15.9877L14.1776 16.1973C13.0843 16.9657 11.5968 16.8369 10.6519 15.8919L6.36216 11.6022C5.78515 11.0252 4.85958 10.9944 4.24546 11.5317L2.75038 12.8399C2.75296 14.7884 2.77289 16.2448 2.92637 17.3864Z"
                    />
                </svg>
            ),
        },
    ];

    return (
        <aside className="sm:w-[270px] sm:h-screen overflow-y-auto sm:p-[48px_24px_32px_24px] sm:dark:bg-dark-2 dark:bg-dark-3 bg-light-2 fixed left-0 sm:top-0 bottom-0 h-[80px] w-full">
            <Link
                to={"/"}
                className="dark:text-light-1 text-dark-1 sm:flex items-center gap-2 hidden"
            >
                <img src="/assets/img/logo.svg" alt="Logo" />
                <h1 className="font-bold text-[28.275px]">Umediagram</h1>
            </Link>
            <Link
                to={"/profile"}
                className="dark:text-light-2 text-dark-2 sm:flex hidden justify-start items-center gap-[11px]"
            >
                <img
                    src="/assets/img/profile-pic.svg"
                    alt="Profile picture"
                    className="rounded-full m-[48px_0_45px_0]"
                />
                <div className="flex justify-start items-center flex-col">
                    <h2 className="tracking-[-1px] leading-[140%] text-[18px] font-bold w-full">
                        Lewis Hamilton
                    </h2>
                    <p className="font-regular text-[14px] leading-[140%] w-full text-light-3">
                        @Lewishamilton
                    </p>
                </div>
            </Link>
            <div className="flex flex-col justify-between items-start gap-16">
                <ul className="text-light-1 flex flex-col justify-between items-start gap-4 w-full side-list">
                    {list.map((item) => (
                        <li
                            className={`flex items-center w-full side-item ${
                                location.pathname === item.slug && "side-active"
                            }`}
                            key={item.slug}
                        >
                            <img
                                src="/assets/img/icons/indicator.svg"
                                className="absolute left-[-32px] hidden indicator"
                            />
                            <Link to={item.slug}>
                                {item.icon}
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="text-light-1 flex flex-col justify-between items-start gap-4 w-full side-list">
                    <li
                        className={`flex items-center w-full side-item ${
                            location.pathname === "/logout" && "side-active"
                        }`}
                    >
                        <img
                            src="/assets/img/icons/indicator.svg"
                            className="absolute left-[-32px] hidden indicator"
                        />
                        <Link to={"/logout"}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L7.46967 9.46967C7.76257 9.17678 8.23744 9.17678 8.53033 9.46967C8.82323 9.76256 8.82323 10.2374 8.53033 10.5303L7.81066 11.25L15 11.25C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75L7.81066 12.75L8.53033 13.4697C8.82323 13.7626 8.82323 14.2374 8.53033 14.5303C8.23744 14.8232 7.76257 14.8232 7.46967 14.5303L5.46967 12.5303Z" />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.9453 1.25H15.0551C16.4227 1.24998 17.525 1.24996 18.392 1.36652C19.2921 1.48754 20.05 1.74643 20.6519 2.34835C21.2538 2.95027 21.5127 3.70814 21.6337 4.60825C21.7503 5.47522 21.7502 6.57754 21.7502 7.94513V16.0549C21.7502 17.4225 21.7503 18.5248 21.6337 19.3918C21.5127 20.2919 21.2538 21.0497 20.6519 21.6517C20.05 22.2536 19.2921 22.5125 18.392 22.6335C17.525 22.75 16.4227 22.75 15.0551 22.75H13.9453C12.5778 22.75 11.4754 22.75 10.6085 22.6335C9.70836 22.5125 8.95048 22.2536 8.34857 21.6517C7.94963 21.2527 7.70068 20.7844 7.54305 20.2498C6.59168 20.2486 5.79906 20.2381 5.15689 20.1518C4.39294 20.0491 3.7306 19.8268 3.20191 19.2981C2.67321 18.7694 2.45093 18.1071 2.34822 17.3431C2.24996 16.6123 2.24998 15.6865 2.25 14.5537V9.44631C2.24998 8.31349 2.24996 7.38774 2.34822 6.65689C2.45093 5.89294 2.67321 5.2306 3.20191 4.7019C3.7306 4.17321 4.39294 3.95093 5.15689 3.84822C5.79906 3.76188 6.59168 3.75142 7.54305 3.75017C7.70068 3.21562 7.94963 2.74729 8.34857 2.34835C8.95048 1.74643 9.70836 1.48754 10.6085 1.36652C11.4754 1.24996 12.5778 1.24998 13.9453 1.25ZM7.25197 17.0042C7.25555 17.6487 7.2662 18.2293 7.30285 18.7491C6.46836 18.7459 5.848 18.7312 5.35676 18.6652C4.75914 18.5848 4.46611 18.441 4.26257 18.2374C4.05903 18.0339 3.91519 17.7409 3.83484 17.1432C3.7516 16.5241 3.75 15.6997 3.75 14.5V9.5C3.75 8.30029 3.7516 7.47595 3.83484 6.85676C3.91519 6.25914 4.05903 5.9661 4.26257 5.76256C4.46611 5.55902 4.75914 5.41519 5.35676 5.33484C5.848 5.2688 6.46836 5.25415 7.30285 5.25091C7.2662 5.77073 7.25555 6.35129 7.25197 6.99583C7.24966 7.41003 7.58357 7.74768 7.99778 7.74999C8.41199 7.7523 8.74964 7.41838 8.75194 7.00418C8.75803 5.91068 8.78643 5.1356 8.89448 4.54735C8.9986 3.98054 9.16577 3.65246 9.40923 3.40901C9.68599 3.13225 10.0746 2.9518 10.8083 2.85315C11.5637 2.75159 12.5648 2.75 14.0002 2.75H15.0002C16.4356 2.75 17.4367 2.75159 18.1921 2.85315C18.9259 2.9518 19.3144 3.13225 19.5912 3.40901C19.868 3.68577 20.0484 4.07435 20.1471 4.80812C20.2486 5.56347 20.2502 6.56459 20.2502 8V16C20.2502 17.4354 20.2486 18.4365 20.1471 19.1919C20.0484 19.9257 19.868 20.3142 19.5912 20.591C19.3144 20.8678 18.9259 21.0482 18.1921 21.1469C17.4367 21.2484 16.4356 21.25 15.0002 21.25H14.0002C12.5648 21.25 11.5637 21.2484 10.8083 21.1469C10.0746 21.0482 9.68599 20.8678 9.40923 20.591C9.16577 20.3475 8.9986 20.0195 8.89448 19.4527C8.78643 18.8644 8.75803 18.0893 8.75194 16.9958C8.74964 16.5816 8.41199 16.2477 7.99778 16.25C7.58357 16.2523 7.24966 16.59 7.25197 17.0042Z"
                                />
                            </svg>
                            Logout
                        </Link>
                    </li>
                    <li
                        className={`flex items-center w-full side-item ${
                            location.pathname === "/settings" && "side-active"
                        }`}
                    >
                        <img
                            src="/assets/img/icons/indicator.svg"
                            className="absolute left-[-32px] hidden indicator"
                        />
                        <Link to={"/settings"}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 8.25C9.92894 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92894 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.9747 1.25C11.5303 1.24999 11.1592 1.24999 10.8546 1.27077C10.5375 1.29241 10.238 1.33905 9.94761 1.45933C9.27379 1.73844 8.73843 2.27379 8.45932 2.94762C8.31402 3.29842 8.27467 3.66812 8.25964 4.06996C8.24756 4.39299 8.08454 4.66251 7.84395 4.80141C7.60337 4.94031 7.28845 4.94673 7.00266 4.79568C6.64714 4.60777 6.30729 4.45699 5.93083 4.40743C5.20773 4.31223 4.47642 4.50819 3.89779 4.95219C3.64843 5.14353 3.45827 5.3796 3.28099 5.6434C3.11068 5.89681 2.92517 6.21815 2.70294 6.60307L2.67769 6.64681C2.45545 7.03172 2.26993 7.35304 2.13562 7.62723C1.99581 7.91267 1.88644 8.19539 1.84541 8.50701C1.75021 9.23012 1.94617 9.96142 2.39016 10.5401C2.62128 10.8412 2.92173 11.0602 3.26217 11.2741C3.53595 11.4461 3.68788 11.7221 3.68786 12C3.68785 12.2778 3.53592 12.5538 3.26217 12.7258C2.92169 12.9397 2.62121 13.1587 2.39007 13.4599C1.94607 14.0385 1.75012 14.7698 1.84531 15.4929C1.88634 15.8045 1.99571 16.0873 2.13552 16.3727C2.26983 16.6469 2.45535 16.9682 2.67758 17.3531L2.70284 17.3969C2.92507 17.7818 3.11058 18.1031 3.28089 18.3565C3.45817 18.6203 3.64833 18.8564 3.89769 19.0477C4.47632 19.4917 5.20763 19.6877 5.93073 19.5925C6.30717 19.5429 6.647 19.3922 7.0025 19.2043C7.28833 19.0532 7.60329 19.0596 7.8439 19.1986C8.08452 19.3375 8.24756 19.607 8.25964 19.9301C8.27467 20.3319 8.31403 20.7016 8.45932 21.0524C8.73843 21.7262 9.27379 22.2616 9.94761 22.5407C10.238 22.661 10.5375 22.7076 10.8546 22.7292C11.1592 22.75 11.5303 22.75 11.9747 22.75H12.0252C12.4697 22.75 12.8407 22.75 13.1454 22.7292C13.4625 22.7076 13.762 22.661 14.0524 22.5407C14.7262 22.2616 15.2616 21.7262 15.5407 21.0524C15.686 20.7016 15.7253 20.3319 15.7403 19.93C15.7524 19.607 15.9154 19.3375 16.156 19.1985C16.3966 19.0596 16.7116 19.0532 16.9974 19.2042C17.3529 19.3921 17.6927 19.5429 18.0692 19.5924C18.7923 19.6876 19.5236 19.4917 20.1022 19.0477C20.3516 18.8563 20.5417 18.6203 20.719 18.3565C20.8893 18.1031 21.0748 17.7818 21.297 17.3969L21.3223 17.3531C21.5445 16.9682 21.7301 16.6468 21.8644 16.3726C22.0042 16.0872 22.1135 15.8045 22.1546 15.4929C22.2498 14.7697 22.0538 14.0384 21.6098 13.4598C21.3787 13.1586 21.0782 12.9397 20.7378 12.7258C20.464 12.5538 20.3121 12.2778 20.3121 11.9999C20.3121 11.7221 20.464 11.4462 20.7377 11.2742C21.0783 11.0603 21.3788 10.8414 21.6099 10.5401C22.0539 9.96149 22.2499 9.23019 22.1547 8.50708C22.1136 8.19546 22.0043 7.91274 21.8645 7.6273C21.7302 7.35313 21.5447 7.03183 21.3224 6.64695L21.2972 6.60318C21.0749 6.21825 20.8894 5.89688 20.7191 5.64347C20.5418 5.37967 20.3517 5.1436 20.1023 4.95225C19.5237 4.50826 18.7924 4.3123 18.0692 4.4075C17.6928 4.45706 17.353 4.60782 16.9975 4.79572C16.7117 4.94679 16.3967 4.94036 16.1561 4.80144C15.9155 4.66253 15.7524 4.39297 15.7403 4.06991C15.7253 3.66808 15.686 3.2984 15.5407 2.94762C15.2616 2.27379 14.7262 1.73844 14.0524 1.45933C13.762 1.33905 13.4625 1.29241 13.1454 1.27077C12.8407 1.24999 12.4697 1.24999 12.0252 1.25H11.9747ZM10.5216 2.84515C10.5988 2.81319 10.716 2.78372 10.9567 2.76729C11.2042 2.75041 11.5238 2.75 12 2.75C12.4762 2.75 12.7958 2.75041 13.0432 2.76729C13.284 2.78372 13.4012 2.81319 13.4783 2.84515C13.7846 2.97202 14.028 3.21536 14.1548 3.52165C14.1949 3.61826 14.228 3.76887 14.2414 4.12597C14.271 4.91835 14.68 5.68129 15.4061 6.10048C16.1321 6.51968 16.9974 6.4924 17.6984 6.12188C18.0143 5.9549 18.1614 5.90832 18.265 5.89467C18.5937 5.8514 18.9261 5.94047 19.1891 6.14228C19.2554 6.19312 19.3395 6.27989 19.4741 6.48016C19.6125 6.68603 19.7726 6.9626 20.0107 7.375C20.2488 7.78741 20.4083 8.06438 20.5174 8.28713C20.6235 8.50382 20.6566 8.62007 20.6675 8.70287C20.7108 9.03155 20.6217 9.36397 20.4199 9.62698C20.3562 9.70995 20.2424 9.81399 19.9397 10.0041C19.2684 10.426 18.8122 11.1616 18.8121 11.9999C18.8121 12.8383 19.2683 13.574 19.9397 13.9959C20.2423 14.186 20.3561 14.29 20.4198 14.373C20.6216 14.636 20.7107 14.9684 20.6674 15.2971C20.6565 15.3799 20.6234 15.4961 20.5173 15.7128C20.4082 15.9355 20.2487 16.2125 20.0106 16.6249C19.7725 17.0373 19.6124 17.3139 19.474 17.5198C19.3394 17.72 19.2553 17.8068 19.189 17.8576C18.926 18.0595 18.5936 18.1485 18.2649 18.1053C18.1613 18.0916 18.0142 18.045 17.6983 17.8781C16.9973 17.5075 16.132 17.4803 15.4059 17.8995C14.68 18.3187 14.271 19.0816 14.2414 19.874C14.228 20.2311 14.1949 20.3817 14.1548 20.4784C14.028 20.7846 13.7846 21.028 13.4783 21.1549C13.4012 21.1868 13.284 21.2163 13.0432 21.2327C12.7958 21.2496 12.4762 21.25 12 21.25C11.5238 21.25 11.2042 21.2496 10.9567 21.2327C10.716 21.2163 10.5988 21.1868 10.5216 21.1549C10.2154 21.028 9.97201 20.7846 9.84514 20.4784C9.80512 20.3817 9.77195 20.2311 9.75859 19.874C9.72896 19.0817 9.31997 18.3187 8.5939 17.8995C7.86784 17.4803 7.00262 17.5076 6.30158 17.8781C5.98565 18.0451 5.83863 18.0917 5.73495 18.1053C5.40626 18.1486 5.07385 18.0595 4.81084 17.8577C4.74458 17.8069 4.66045 17.7201 4.52586 17.5198C4.38751 17.314 4.22736 17.0374 3.98926 16.625C3.75115 16.2126 3.59171 15.9356 3.4826 15.7129C3.37646 15.4962 3.34338 15.3799 3.33248 15.2971C3.28921 14.9684 3.37828 14.636 3.5801 14.373C3.64376 14.2901 3.75761 14.186 4.0602 13.9959C4.73158 13.5741 5.18782 12.8384 5.18786 12.0001C5.18791 11.1616 4.73165 10.4259 4.06021 10.004C3.75769 9.81389 3.64385 9.70987 3.58019 9.62691C3.37838 9.3639 3.28931 9.03149 3.33258 8.7028C3.34348 8.62001 3.37656 8.50375 3.4827 8.28707C3.59181 8.06431 3.75125 7.78734 3.98935 7.37493C4.22746 6.96253 4.3876 6.68596 4.52596 6.48009C4.66055 6.27983 4.74468 6.19305 4.81093 6.14222C5.07395 5.9404 5.40636 5.85133 5.73504 5.8946C5.83873 5.90825 5.98576 5.95483 6.30173 6.12184C7.00273 6.49235 7.86791 6.51962 8.59394 6.10045C9.31998 5.68128 9.72896 4.91837 9.75859 4.12602C9.77195 3.76889 9.80512 3.61827 9.84514 3.52165C9.97201 3.21536 10.2154 2.97202 10.5216 2.84515Z"
                                />
                            </svg>
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
