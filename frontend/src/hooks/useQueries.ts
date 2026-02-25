import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { IndustryType, InvestmentTimeline, type PlotSize } from '../backend';

export function useGetEnquiries() {
    const { actor, isFetching } = useActor();

    return useQuery({
        queryKey: ['enquiries'],
        queryFn: async () => {
            if (!actor) return [];
            return actor.getEnquiries();
        },
        enabled: !!actor && !isFetching,
    });
}

export interface EnquiryFormData {
    companyName: string;
    contactPerson: string;
    phone: string;
    email: string;
    industryType: IndustryType;
    plotSize: PlotSize;
    powerRequirement: string;
    investmentTimeline: InvestmentTimeline;
}

export function useSubmitEnquiry() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: EnquiryFormData) => {
            if (!actor) throw new Error('Backend not available');
            await actor.submitEnquiry(
                data.companyName,
                data.contactPerson,
                data.phone,
                data.email,
                data.industryType,
                data.plotSize,
                data.powerRequirement,
                data.investmentTimeline
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['enquiries'] });
        },
    });
}

export { IndustryType, InvestmentTimeline };
