
import { useParams } from 'react-router-dom';
import { MOCK_CARDS } from '@/lib/mock-data';
import { THEMES } from '@/lib/themes';
import { Button } from '@/components/ui/button';

const CardView = () => {
    const { id } = useParams();

    // Find card by slug or id
    const card = MOCK_CARDS.find(c => c.slug === id || c.id === id);

    if (!card) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900">Card Not Found</h2>
                <p className="text-gray-500 mt-2">The business card you are looking for does not exist.</p>
            </div>
        );
    }

    // Check for preview query param ?theme=... or use card's theme
    const searchParams = new URLSearchParams(window.location.search);
    const themeId = searchParams.get('theme') || card.templateId || 'minimal';

    // Find component in registry
    const ThemeComponent = THEMES.find(t => t.id === themeId)?.component || THEMES[0].component;

    return (
        <div className="animate-in fade-in zoom-in duration-500 h-screen w-full">
            <ThemeComponent />
        </div>
    );
};

export default CardView;
