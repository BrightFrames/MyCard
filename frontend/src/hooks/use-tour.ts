import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useEffect, useRef } from "react";

export const useTour = () => {
    const driverObj = useRef(
        driver({
            showProgress: true,
            animate: true,
            steps: [
                {
                    element: "#dashboard-sidebar",
                    popover: {
                        title: "Navigation",
                        description: "Here you can access all the different sections of your dashboard.",
                        side: "right",
                        align: "start",
                    },
                },
                {
                    element: "#nav-item-dashboard",
                    popover: {
                        title: "Dashboard Overview",
                        description: "Get a quick overview of your card's performance and recent activities.",
                        side: "right",
                    },
                },
                {
                    element: "#nav-item-cards",
                    popover: {
                        title: "Business Cards",
                        description: "Create, manage, and customize your digital business cards here.",
                        side: "right",
                    },
                },
                {
                    element: "#nav-item-nfc-cards",
                    popover: {
                        title: "My NFC Cards",
                        description: "Manage your physical NFC cards and link them to your digital profiles.",
                        side: "right",
                    },
                },
                {
                    element: "#dashboard-search",
                    popover: {
                        title: "Global Search",
                        description: "Quickly find orders, cards, or specific settings.",
                        side: "bottom",
                    },
                },
                {
                    element: "#user-profile-section",
                    popover: {
                        title: "Profile & Settings",
                        description: "Manage your account settings, subscription, and logout.",
                        side: "top",
                    },
                },
            ],
        })
    );

    const startTour = () => {
        driverObj.current.drive();
    };

    return { startTour };
};
