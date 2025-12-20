
import { useParams } from 'react-router-dom';
import { MOCK_CARDS } from '@/lib/mock-data';
import ModernCard from './templates/ModernCard';
import ClassicCard from './templates/ClassicCard';
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

    return (
        <div className="animate-in fade-in zoom-in duration-500">
            {/* Template Switcher */}
            {card.templateId === 'modern-1' && <ModernCard data={card.data} />}
            {card.templateId === 'classic-1' && <ClassicCard data={card.data} />}

            {/* Save Contact dummy button */}
            <div className="mt-8 px-4 w-full max-w-md mx-auto">
                <Button className="w-full h-12 text-lg shadow-xl shadow-blue-500/20" size="lg">
                    Save Contact
                </Button>
            </div>
        </div>
    );
};

export default CardView;
