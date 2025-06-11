import { OutlineCard } from '@/lib/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CreativeAIStore = {
  outlines: OutlineCard[] | [];
  addMultipleOutlines: (outlines: OutlineCard[]) => void;
  addOutline: (outline: OutlineCard) => void;
  setCurrentAiPrompt: (prompt: string) => void;
  currentAiPrompt: string;
};

const useCreativeAIStore = create<CreativeAIStore>()(
  persist(
    (set) => ({
      currentAiPrompt: '',
      setCurrentAiPrompt: (prompt: string) => {
        set({ currentAiPrompt: prompt });
      },

      outlines: [],
      addOutline: (outline: OutlineCard) => {
        set((state) => ({
          outlines: [outline, ...state.outlines],
        }));
      },
      addMultipleOutlines: (outlines: OutlineCard[]) => {
        set(() => ({
          outlines: [...outlines],
        }));
      },
    }),
    {
      name: 'creative-ai',
    }
  )
);

export default useCreativeAIStore;
